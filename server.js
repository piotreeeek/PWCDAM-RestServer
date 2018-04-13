var express = require('express');
var app = express();

var weatherRoutes = require('./routes/weatherRoutes');

weatherRoutes(app);

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
