'use strict';
module.exports = function(app) {
  var weatherController = require('../controllers/weatherController');

  // todoList Routes
  app.route('/cities')
    .get(weatherController.getCities);

  app.route("/city/:city")
    .get(weatherController.getWeather)

};
