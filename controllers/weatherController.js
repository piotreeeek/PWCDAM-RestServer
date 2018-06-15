'use strict';
var weather = require('openweather-apis');
var cities = [
    {id: 756135, name: "Warszawa"},
    {id: 3093133, name: "Łódź"},
    {id: 3093066, name: "Lowicz"},
    {id: 3088825, name: "Płock"},
    {id: 2950159, name: "Berlin"},
    {id: 2988507, name: "Paryż"},
    {id: 2643741, name: "Londyn"},
    {id: 1816670, name: "Pekin"}];

weather.setLang('pl');


  exports.getCities = function(req, res) {
      res.json(cities);
  }

  exports.getWeather = function(req, res) {
      console.log(req.params.city);

      var city = cities.find(o => o.name === req.params.city);
      console.log(city);
      if (city) {
          weather.setCityId(city.id);
          weather.setUnits("metric");

          weather.setAPPID("609191e92beb5b9b8d10c2124c026211");

          weather.getAllWeather(function (err, currentWeather) {
              if (err) {
                  console.log(err);
                  res.sendStatus(404);
              }
              else {
                  console.log(currentWeather);
                  if (currentWeather.cod != 200) {
                      res.sendStatus(404);
                  } else {
                      var weather = {};
                      Object.assign(weather, currentWeather.weather[0], currentWeather.main, {
                          speed: currentWeather.wind.speed,
                          cod: currentWeather.cod
                      });
                      console.log(weather);
                      res.json(weather);
                  }
              }
          });
      }else{
          res.sendStatus(404);
      }
  };
