var express = require('express');
var app = express();
var config = require('./config.js');
var Twitter = require('twitter');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});

var params = {screen_name: 'ctodmia'};

app.param('name', function(req, res, next, name){
  var screen_name = name;
  req.name = screen_name;
  next();
})

app.get('/users/:name', function(req, res) {
  params = {screen_name: req.name};
  client.get('users/show', params, function(error, founduser, response) {
    if(error) {
      return error
    }
    res.json(founduser);
  });
});

app.get('/tweets/:name', function(req, res) {
  if(req.name) {
    params = {screen_name: req.name};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if(error) {return error};
     res.json(tweets); 
    });
  } else {
    res.send('no user found');
  }
});

app.listen(port);
console.log('its going down on port ' + port);