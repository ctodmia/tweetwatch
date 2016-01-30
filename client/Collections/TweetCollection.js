var TweetCollection = Backbone.Collection.extend({
	model: Tweet,
	url: function(name) {
		console.log('this the name you entered', name);
		return '/tweets/'+name;
	},
	parse: function(data) {
		console.log('this is data', data);
	}
});