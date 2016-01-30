var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	url: function(name) {
		return '/tweets/'+name;
	},
	parse: function(data) {
		return data;
	}
});