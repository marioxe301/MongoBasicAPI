const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    job: Joi.string().optional(),
    gender: Joi.string().max(1).min(1).required()
});

module.exports = schema;