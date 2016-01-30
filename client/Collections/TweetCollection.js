var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	url: '/tweets',
	parse: function(data) {
		console.log('this is data', data);
	}
});