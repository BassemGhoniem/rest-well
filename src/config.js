const _ = require('lodash');

const config = {
  dev: {
    app: { port: parseInt(process.env.APP_PORT, 10) },

    db: { uri: process.env.MONGODB_URI },
  },

  test: { },
  prod: { },
};

module.exports = _.merge(config.dev, config[process.env.NODE_ENV]);
