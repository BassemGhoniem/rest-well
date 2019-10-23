/* eslint-disable no-console */
const db = require('../src/db');
const config = require('../src/config');
const samples = require('./samples');

const CoffeeMachineModel = require('../src/models/coffeeMachine');
const CoffeePodModel = require('../src/models/coffeePod');

async function run() {
  try {
    await db(config.db.uri);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  await db.dropDatabase();
  let result = await CoffeeMachineModel.insertMany(samples.coffeeMachines);
  console.log(`Successfully inserted ${result.length} coffee machines`);

  result = await CoffeePodModel.insertMany(samples.coffeePods);
  console.log(`Successfully inserted ${result.length} coffee pods`);
  await db.close();
}

run();
