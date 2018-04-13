'use strict';

const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '609191e92beb5b9b8d10c2124c026211',
        units: "metric"
    }
);

  exports.getCities = function(req, res) {
    var cities = [{id: 1, name: "Warszawa"}, {id: 2, name: "Łódz"}, {id:3, name: "Płock"}];
    res.json(cities);
  }

  exports.getWeather = function(req, res) {
    helper.getCurrentWeatherByCityName(req.params.city, (err, currentWeather) => {
      if(err){
          console.log(err);
          res.sendStatus(404);
      }
      else{
        console.log(currentWeather);
        var weather = {};
        Object.assign(weather, currentWeather.weather[0],  currentWeather.main, currentWeather.wind, {visibility: currentWeather.visibility});
        res.json(weather);
      }
    });
  };
