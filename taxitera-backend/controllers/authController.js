const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/user');
const { registerSchema, loginSchema } = require('../middleware/validation');
const { sendResponse } = require('../utils/helpers');

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res, body) => {
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
};

const login = async (req, res, body) => {
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
};

const resetPassword = async (req, res, body) => {
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
};

module.exports = { register, login, resetPassword };
