'use strict';

const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '609191e92beb5b9b8d10c2124c026211',
        units: "metrics"
    }
);

  exports.getCities = function(req, res) {
    helper.getCurrentWeatherByCityName(req.params.city, (err, currentWeather) => {
      if(err){
          console.log(err);
      }
      else{
          console.log(currentWeather);
      }
    });
    res.sendStatus(200);
    res.json("dziala");
  };
