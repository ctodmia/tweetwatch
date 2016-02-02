var TweetCollection = Backbone.Collection.extend({
	// model: Tweet,
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
			this.model = new Tweet();
			this.model.set({
				id: data.id,
				name: tweet.user.name,
				screenname: tweet.user.screen_name,
				date: tweet.created_at,
				text: tweet.text,
				image: tweet.user.profile_image_url_https
			})
			tweets.push(this.model)
		})

		return tweets
	}
});