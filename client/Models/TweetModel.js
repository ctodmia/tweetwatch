var Tweet = Backbone.Model.extend({
	defaults: {
		from_user: 'carinetodmia',
		text: 'This is so awesome'
	}
});

var myTweet = new Tweet();

