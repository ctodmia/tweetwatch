var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	screenName: "screen_name",
	url: '/tweets/screenName',
	parse: function(data) {
		console.log('this is data', data);
	}
});