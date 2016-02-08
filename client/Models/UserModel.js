var UserModel = Backbone.Model.extend({
	initialize: function(name){
		var url = this.url(name);
		this.fetch({url: url});
	},
	url: function(name) {
		return '/users/'+name;
	},
	parse: function(data) {
		this.set({
			id: data.id,
			name: data.name, 
			screenname: data.screen_name,
			description: data.description,
			image: data.profile_image_url_https,
		});
		return this.toJSON();
	}
});