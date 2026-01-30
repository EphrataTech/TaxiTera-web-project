const { createBooking, getBookings } = require('../controllers/bookingController');

const handleBookingRoutes = async (req, res, body) => {
    if (req.url === '/api/bookings' && req.method === 'POST') {
        return await createBooking(req, res, body);
    }
    
    if (req.url === '/api/bookings' && req.method === 'GET') {
        return await getBookings(req, res);
    }
    
    return false; // Route not handled
};

module.exports = { handleBookingRoutes };