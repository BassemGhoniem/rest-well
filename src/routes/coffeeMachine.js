const express = require('express');


module.exports = (controller) => {
  const router = express.Router();
  router
    .get('/filter', controller.filter);
  return router;
};
