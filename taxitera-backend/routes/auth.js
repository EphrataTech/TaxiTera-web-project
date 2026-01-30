const { register, login, resetPassword } = require('../controllers/authController');

const handleAuthRoutes = async (req, res, body) => {
    if (req.url === '/api/register' && req.method === 'POST') {
        return await register(req, res, body);
    }
    
    if (req.url === '/api/login' && req.method === 'POST') {
        return await login(req, res, body);
    }
    
    if (req.url === '/api/reset-password' && req.method === 'POST') {
        return await resetPassword(req, res, body);
    }
    
    return false; // Route not handled
};

module.exports = { handleAuthRoutes };