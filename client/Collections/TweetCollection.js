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
			var options = {year: 'numeric', month: 'short', day: 'numeric' };
			var date = new Date(tweet.created_at)
			var newDate = date.toLocaleString('en-US', options)
			this.models.set({
				id: tweet.id,
				name: tweet.user.name,
				screenname: tweet.user.screen_name,
				date: newDate,
				text: tweet.text,
				image: tweet.user.profile_image_url_https,
				link: 'https://twitter.com/'+tweet.user.screen_name+'/statuses/'+tweet.id_str,
				classname: 'collection-item'
			})

			tweets.push(this.models);
		})

		return tweets
	}
});