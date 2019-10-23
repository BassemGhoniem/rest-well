/* eslint-disable no-console */
const bodyParser = require('body-parser');
const app = require('express')();
const swaggerUi = require('swagger-ui-express');

const db = require('./db');
const config = require('./config');

const swaggerDocument = require('./routes/docs.json');

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

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err });
  });

  app.listen(config.app.port, () => {
    console.log(`Server started @ ${config.app.port}`);
  });
}

run();
