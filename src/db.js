const mongoose = require('mongoose');

module.exports = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    autoIndex: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10,
  });
};

module.exports.dropDatabase = () => mongoose.connection.db.dropDatabase();
module.exports.close = () => mongoose.connection.close();
