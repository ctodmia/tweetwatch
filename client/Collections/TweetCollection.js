var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	initialize: function(name){
		var url = this.url(name);
		this.fetch({url:url})
	},
	url: function(name) {
		return '/tweets/'+name;
	},
	parse: function(data) {
		var tweets = this.toJSON();
		_.each(data, function(tweet){
			this.models = new Tweet();
			this.models.set({
				id: tweet.id,
				name: tweet.user.name,
				screenname: tweet.user.screen_name,
				date: tweet.created_at,
				text: tweet.text,
				image: tweet.user.profile_image_url_https,
				link: 'https://twitter.com/'+tweet.user.screen_name+'/statuses/'+tweet.id_str
			})
			tweets.push(this.models);
		})

		return tweets
	}
});