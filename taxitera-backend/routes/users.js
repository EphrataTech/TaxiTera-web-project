const { getProfile } = require('../controllers/userController');

const handleUserRoutes = async (req, res) => {
    if (req.url === '/api/profile' && req.method === 'GET') {
        return await getProfile(req, res);
    }
    
    return false; // Route not handled
};

module.exports = { handleUserRoutes };