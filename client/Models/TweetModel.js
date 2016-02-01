//we need an userprrofile model for column 1 (userAccount column). this is the person watching the person watching the twitter accounts

//the other columns are classified as twitterAccount column. Each twitterAccount column will consist of at least 2 basic models: 
	//twitterProfile model
	//Tweets Model
		//subsequently we need to create a Tweet Model for a single tweet


var Tweet = Backbone.Model.extend({
	defaults: {
		name: '',
		screenname: '',
		profilepic: '',
		date: '',
		text:'',
		link: ''
	}
});

var TwitterProfile = Backbone.Model.extend({
	defaults: {
		username: '',
		screenname: '',
		profilepic: '',
		location: '',
		url: ''
	}
});

var UserProfile = Backbone.Model.extend({
	defaults: {
		userpic: '',
		username: '',
		screenname: '',
		paragraph: '',
		location: '',
		link: '',
		tweetcount: '',
		followingcount: '',
		followerscount: ''
	}
});