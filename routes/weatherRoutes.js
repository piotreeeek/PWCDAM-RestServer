'use strict';
module.exports = function(app) {
  var weatherController = require('../controllers/weatherController');

  // todoList Routes
  app.route('/city/:city')
    .get(weatherController.getCities);

};
