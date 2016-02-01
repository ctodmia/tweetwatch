var TweetCollection = Backbone.Collection.extend({
	model: Tweet
});

var Tweets = TweetCollection.extend({
	initialize: function(name){
		this.name = name;
		console.log('this is name', name);
		var url = this.url(this.name);
		this.fetch({url: url});
	},
	url: function(name) {
		return '/tweets/'+name;
	},
	parse: function(data) {
		var tweets = this.toJSON();
		_.each(data, function(tweet){
			tweets.push(tweet)
			// this.model.date = tweet.created_at
			console.log('this worked', tweet);
			console.log('this is our tweets var', tweets)
			console.log('this the model', tweets.model)
		})

		return tweets
	},
})
