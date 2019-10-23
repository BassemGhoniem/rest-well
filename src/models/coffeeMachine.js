const { Schema, model } = require('mongoose');
const MongooseErrors = require('mongoose-errors');

const coffeeMachine = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  product_type: {
    type: String,
    enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
    required: true,
    trim: true,
  },

  water_line_compatible: {
    type: Boolean,
    default: false,
  },

  model: {
    type: String,
    trim: true,
  },
}, {
  autoIndex: false,
  timestamps: true,
});

coffeeMachine.plugin(MongooseErrors);

const CoffeeMachine = model('CoffeeMachine', coffeeMachine);

(async function createIndex() {
  const index = await CoffeeMachine.createIndexes();
  return index;
}());

module.exports = CoffeeMachine;
