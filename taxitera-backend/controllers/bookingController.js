const Booking = require('../models/booking');
const { verifyToken } = require('../middleware/auth');
const { bookingSchema } = require('../middleware/validation');
const { sendResponse } = require('../utils/helpers');

const createBooking = async (req, res, body) => {
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
};

const getBookings = async (req, res) => {
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
};

module.exports = { createBooking, getBookings };