const Joi = require('joi');
const controller = require('./controller');

const schema = Joi.object().keys({
  product_type: Joi.string().valid(['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE']),
  water_line_compatible: Joi.boolean(),
});

module.exports = (Model) => controller(Model, schema);
