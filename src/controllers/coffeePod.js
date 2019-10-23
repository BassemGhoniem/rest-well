const Joi = require('joi');
const controller = require('./controller');

const schema = Joi.object().keys({
  product_type: Joi.string().valid(['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD']),
  coffee_flavor: Joi.string().valid([
    'COFFEE_FLAVOR_VANILLA',
    'COFFEE_FLAVOR_CARAMEL',
    'COFFEE_FLAVOR_PSL',
    'COFFEE_FLAVOR_MOCHA',
    'COFFEE_FLAVOR_HAZELNUT',
  ]),
  pack_size: Joi.number().valid([1, 3, 5, 7]),
});

module.exports = (Model) => controller(Model, schema);
