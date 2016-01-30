var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	url: '/tweets',
	parse: function(data) {
		return data;
	}
});