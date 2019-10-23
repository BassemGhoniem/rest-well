/* eslint-disable no-console */
const _ = require('lodash');
const bodyParser = require('body-parser');
const app = require('express')();
const swaggerUi = require('swagger-ui-express');

const db = require('./db');
const config = require('./config');

const swaggerDocument = require('./routes/docs.json');

const CoffeeMachineModel = require('./models/coffeeMachine');
const coffeeMachineController = require('./controllers/coffeeMachine')(CoffeeMachineModel);
const coffeeMachineRoutes = require('./routes/coffeeMachine')(coffeeMachineController);

const CoffeePodModel = require('./models/coffeePod');
const coffeePodController = require('./controllers/coffeePod')(CoffeePodModel);
const coffeePodRoutes = require('./routes/coffeePod')(coffeePodController);

async function run() {
  try {
    await db(config.db.uri);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/coffee-machine', coffeeMachineRoutes);
  app.use('/coffee-pod', coffeePodRoutes);

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    _.unset(err, 'status');
    res.json({ error: err });
  });

  app.listen(config.app.port, () => {
    console.log(`Server started @ ${config.app.port}`);
  });
}

run();
