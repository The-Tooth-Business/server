const express = require('express');
const router = express.Router();

const {
	getBookings,
	getBooking,
	makeBooking,
	changeBooking,
	removeBooking,
} = require('../controllers/bookings_controller');

// Authenticate user

// Read all bookings
router.get('/', getBookings);

// Read booking with :id
router.get('/:id', getBooking);

// Make a booking
router.post('/', makeBooking);

// Update booking
router.delete('/:id', removeBooking);

// Delete booking

module.exports = router;
