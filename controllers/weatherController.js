'use strict';
var weather = require('openweather-apis');

weather.setLang('pl');


  exports.getCities = function(req, res) {
    var cities = [{id: 1, name: "Warszawa"}, {id: 2, name: "Łódź"}, {id:3, name: "Płock"}, {id:4, name: "dupacycki"}];
    res.json(cities);
  }

  exports.getWeather = function(req, res) {
      console.log(req.params.city);

      weather.setCity(req.params.city);
      weather.setUnits("metric");

      weather.setAPPID("609191e92beb5b9b8d10c2124c026211");

      weather.getAllWeather(function (err, currentWeather) {
          if(err){
              console.log(err);
              res.sendStatus(404);
          }
          else {
              console.log(currentWeather);
              if (currentWeather.cod !=200){
                  res.sendStatus(404);
              }else {
                  var weather = {};
                  Object.assign(weather, currentWeather.weather[0], currentWeather.main, {
                      speed: currentWeather.wind.speed,
                      cod: currentWeather.cod});
                  console.log(weather);
                  res.json(weather);
              }
          }
      });
  };
