const User = require('../models/user');
const { verifyToken } = require('../middleware/auth');
const { sendResponse } = require('../utils/helpers');

const getProfile = async (req, res) => {
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
};

module.exports = { getProfile };