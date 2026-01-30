const Joi = require('joi');

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

module.exports = { registerSchema, loginSchema, bookingSchema };