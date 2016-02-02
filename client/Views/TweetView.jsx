var TweetViewComponent = React.createBackboneClass({
  render: function() {
    return <li><a class="collection-item" target="_blank" href={ this.getModel().get('link') }>{ this.getModel().get('text') }</a></li>;
  }
});

var TweetListViewComponent = React.createBackboneClass({
    render: function() {
        var usersList = this.getCollection().map(function(user) {
            return <TweetViewComponent model={user} />;
        });

        return (
          <div >
            <ul class="collection">
              { usersList }
            </ul>
          </div>
        );
    }
});

var tweets = new TweetCollection('AppDirect')
var TweetListView = React.createFactory(TweetListViewComponent);
var tweetsListView = TweetListView({collection: tweets});

ReactDOM.render(tweetsListView, document.getElementById('tweetview'));
