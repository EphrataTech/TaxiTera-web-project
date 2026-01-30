require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

// Import routes
const { handleAuthRoutes } = require('./routes/auth');
const { handleUserRoutes } = require('./routes/users');
const { handleBookingRoutes } = require('./routes/bookings');

// Import middleware
const { rateLimit } = require('./middleware/rateLimit');

// Import utilities
const { sendResponse, getBody } = require('./utils/helpers');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/taxitera';

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

        // Route handling
        const authHandled = await handleAuthRoutes(req, res, body);
        if (authHandled !== false) return;

        const userHandled = await handleUserRoutes(req, res);
        if (userHandled !== false) return;

        const bookingHandled = await handleBookingRoutes(req, res, body);
        if (bookingHandled !== false) return;

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
