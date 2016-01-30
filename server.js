var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/bower_components'));

app.listen(port);
console.log('its going down on port ' + port);