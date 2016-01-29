var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log('its going down on port ' + port);