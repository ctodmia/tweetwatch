var express = require('express');
var app = express();
var config = require('./config.js');
var Twitter = require('twitter');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use (function (error, req, res, next){
    //Catch json error
    console.log('this is the err', req.body);
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/bower_components'));

var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret,
  // request_options: {
  //   proxy: 'http://carinetodmia.com'
  // }
});


var params = {screen_name: 'AppDirect'};

app.param('name', function(req, res, next, name){
  console.log('this is name', name)
  var screen_name = name;
  req.name = screen_name
  next();
})
app.get('/tweets/:name', function(req, res){
  
  console.log('this is req.name inside the tweets', req.name);

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if(error) {return error};
   res.json(tweets); 
  });

})

app.listen(port);
console.log('its going down on port ' + port);