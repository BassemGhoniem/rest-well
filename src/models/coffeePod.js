const { Schema, model } = require('mongoose');
const MongooseErrors = require('mongoose-errors');

const coffeePod = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  product_type: {
    type: String,
    enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
    required: true,
    trim: true,
  },

  coffee_flavor: {
    type: String,
    enum: [
      'COFFEE_FLAVOR_VANILLA',
      'COFFEE_FLAVOR_CARAMEL',
      'COFFEE_FLAVOR_PSL',
      'COFFEE_FLAVOR_MOCHA',
      'COFFEE_FLAVOR_HAZELNUT',
    ],
    required: true,
    trim: true,
  },

  pack_size: {
    type: Number,
    enum: [1, 3, 5, 7],
  },

}, {
  autoIndex: false,
  timestamps: true,
});

coffeePod.plugin(MongooseErrors);

const CoffeePod = model('CoffeePod', coffeePod);

(async function createIndex() {
  const index = await CoffeePod.createIndexes();
  return index;
}());

module.exports = CoffeePod;
