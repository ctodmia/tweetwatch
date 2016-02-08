var TweetViewComponent = React.createBackboneClass({
  render: function() {
  	var get = this.getModel();		
    return <li><a className="collection-item" target="_blank" href={ get.get('link') }>
    	<div className="row">
    		<div className="col s1">
    			<img src={get.get('image')} />
    		</div>
	    	<div className="col s10 m10">
	    			<ul><li>{get.get('name')} </li> 
	    			<li className="sub">@{get.get('screenname')} </li>
            <li className="sub">{get.get('date') }</li><li></li></ul>
	    			
        </div>
      </div>
        { get.get('text') }    
      </a></li>;
  }
});

var TweetListViewComponent = React.createBackboneClass({
    render: function() {
        var usersList = this.getCollection().map(function(user) {
        	if(user.id) {
            	return <TweetViewComponent model={user} />;
        	}
        });

        return (
          <div className="collection">
            <ul>
              { usersList }
            </ul>
          </div>
        );
    }
});


var tweets1 = new TweetCollection('AppDirect')
var TweetListView = React.createFactory(TweetListViewComponent);
var tweetsListView = TweetListView({collection: tweets1});
ReactDOM.render(tweetsListView, document.getElementById('tweetview1'));

var tweets2 = new TweetCollection('techcrunch')
var TweetListView = React.createFactory(TweetListViewComponent);
var tweetsListView = TweetListView({collection: tweets2});
ReactDOM.render(tweetsListView, document.getElementById('tweetview2'));

var tweets3 = new TweetCollection('laughingsquid')
var TweetListView = React.createFactory(TweetListViewComponent);
var tweetsListView = TweetListView({collection: tweets3});
ReactDOM.render(tweetsListView, document.getElementById('tweetview3'));