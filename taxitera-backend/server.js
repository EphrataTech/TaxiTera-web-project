require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('./models/user');
const Booking = require('./models/booking');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/taxitera';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';

// Rate limiting store
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

// Connect to MongoDB with better error handling
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        console.log('Database:', MONGO_URI.split('/').pop().split('?')[0]);
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// Validation schemas
const registerSchema = Joi.object({
    fullName: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().optional()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const bookingSchema = Joi.object({
    pickup: Joi.object({
        address: Joi.string().required(),
        lat: Joi.number().required(),
        lng: Joi.number().required()
    }).required(),
    destination: Joi.object({
        address: Joi.string().required(),
        lat: Joi.number().required(),
        lng: Joi.number().required()
    }).required(),
    fare: Joi.number().positive().required(),
    scheduledTime: Joi.date().optional()
});

// Rate limiting function
const rateLimit = (ip) => {
    const now = Date.now();
    const userRequests = rateLimitStore.get(ip) || [];
    
    // Remove old requests
    const validRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
    
    if (validRequests.length >= MAX_REQUESTS) {
        return false;
    }
    
    validRequests.push(now);
    rateLimitStore.set(ip, validRequests);
    return true;
};

// Helper to parse JSON body with size limit
const getBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        let size = 0;
        const maxSize = 1024 * 1024; // 1MB limit
        
        req.on('data', chunk => {
            size += chunk.length;
            if (size > maxSize) {
                reject(new Error('Request too large'));
                return;
            }
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                if (body) {
                    resolve(JSON.parse(body));
                } else {
                    resolve({});
                }
            } catch (error) {
                reject(error);
            }
        });
        
        req.on('error', (err) => {
            reject(err);
        });
    });
};

// JWT verification middleware
const verifyToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    
    const token = authHeader.substring(7);
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

// Helper for sending JSON responses
const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { 
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
    });
    res.end(JSON.stringify(data));
};

const server = http.createServer(async (req, res) => {
    // Security headers and CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Specific origin
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Rate limiting
    const clientIP = req.connection.remoteAddress || req.socket.remoteAddress;
    if (!rateLimit(clientIP)) {
        return sendResponse(res, 429, { error: 'Too many requests' });
    }

    console.log(`${req.method} ${req.url}`);

    try {
        // Parse body for POST requests
        const body = (req.method === 'POST' || req.method === 'PUT') ? await getBody(req) : {};

        // Registration endpoint
        if (req.url === '/api/register' && req.method === 'POST') {
            const { error, value } = registerSchema.validate(body);
            if (error) {
                return sendResponse(res, 400, { error: error.details[0].message });
            }

            const { fullName, email, password, phone } = value;

            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return sendResponse(res, 409, { error: 'User already exists' });
                }

                const newUser = new User({ fullName, email, password, phone });
                await newUser.save();

                console.log('User registered:', newUser.email);
                return sendResponse(res, 201, {
                    message: 'User registered successfully',
                    user: { id: newUser._id, email: newUser.email, fullName: newUser.fullName }
                });
            } catch (err) {
                console.error('Registration error:', err);
                
                // Handle specific MongoDB errors
                if (err.code === 11000) {
                    return sendResponse(res, 409, { error: 'Email already exists' });
                }
                if (err.name === 'ValidationError') {
                    const validationErrors = Object.values(err.errors).map(e => e.message);
                    return sendResponse(res, 400, { error: validationErrors.join(', ') });
                }
                
                return sendResponse(res, 500, { 
                    error: 'Error saving user', 
                    details: err.message 
                });
            }
        }

        // Login endpoint
        if (req.url === '/api/login' && req.method === 'POST') {
            const { error, value } = loginSchema.validate(body);
            if (error) {
                return sendResponse(res, 400, { error: error.details[0].message });
            }

            const { email, password } = value;

            const user = await User.findOne({ email });
            if (!user || !(await user.comparePassword(password))) {
                return sendResponse(res, 401, { error: 'Invalid credentials' });
            }

            console.log('User logged in:', user.email);

            const token = jwt.sign(
                { id: user._id, email: user.email },
                JWT_SECRET,
                { expiresIn: '24h' }
            );

            return sendResponse(res, 200, {
                message: 'Login successful',
                token,
                user: { id: user._id, email: user.email, fullName: user.fullName }
            });
        }

        // Password reset endpoint
        if (req.url === '/api/reset-password' && req.method === 'POST') {
            const { email } = body;

            if (!email || Joi.string().email().validate(email).error) {
                return sendResponse(res, 400, { error: 'Valid email required' });
            }

            const user = await User.findOne({ email });
            if (!user) {
                console.log('Password reset requested for non-existent email:', email);
            } else {
                console.log('Password reset requested for:', email);
            }

            return sendResponse(res, 200, { 
                message: 'If that email is registered, you will receive a reset link shortly.' 
            });
        }

        // Protected profile endpoint (test authentication)
        if (req.url === '/api/profile' && req.method === 'GET') {
            const decoded = verifyToken(req);
            if (!decoded) {
                return sendResponse(res, 401, { error: 'Invalid or missing token' });
            }

            try {
                const user = await User.findById(decoded.id).select('-password');
                if (!user) {
                    return sendResponse(res, 404, { error: 'User not found' });
                }

                return sendResponse(res, 200, {
                    message: 'Profile retrieved successfully',
                    user: { id: user._id, email: user.email, fullName: user.fullName, phone: user.phone }
                });
            } catch (err) {
                console.error('Profile error:', err);
                return sendResponse(res, 500, { error: 'Error retrieving profile' });
            }
        }

        // Create booking endpoint
        if (req.url === '/api/bookings' && req.method === 'POST') {
            const decoded = verifyToken(req);
            if (!decoded) {
                return sendResponse(res, 401, { error: 'Invalid or missing token' });
            }

            const { error, value } = bookingSchema.validate(body);
            if (error) {
                return sendResponse(res, 400, { error: error.details[0].message });
            }

            try {
                const booking = new Booking({
                    userId: decoded.id,
                    ...value
                });
                await booking.save();

                return sendResponse(res, 201, {
                    message: 'Booking created successfully',
                    booking: {
                        id: booking._id,
                        pickup: booking.pickup,
                        destination: booking.destination,
                        fare: booking.fare,
                        status: booking.status,
                        bookingTime: booking.bookingTime
                    }
                });
            } catch (err) {
                console.error('Booking error:', err);
                return sendResponse(res, 500, { error: 'Error creating booking' });
            }
        }

        // Get user bookings endpoint
        if (req.url === '/api/bookings' && req.method === 'GET') {
            const decoded = verifyToken(req);
            if (!decoded) {
                return sendResponse(res, 401, { error: 'Invalid or missing token' });
            }

            try {
                const bookings = await Booking.find({ userId: decoded.id })
                    .sort({ bookingTime: -1 });

                return sendResponse(res, 200, {
                    message: 'Bookings retrieved successfully',
                    bookings
                });
            } catch (err) {
                console.error('Get bookings error:', err);
                return sendResponse(res, 500, { error: 'Error retrieving bookings' });
            }
        }

        // 404 for other routes
        sendResponse(res, 404, { error: 'Not Found' });

    } catch (error) {
        console.error('Server error:', error);
        if (error.message === 'Request too large') {
            return sendResponse(res, 413, { error: 'Request too large' });
        }
        sendResponse(res, 500, { error: 'Internal Server Error' });
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
