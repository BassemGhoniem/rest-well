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
