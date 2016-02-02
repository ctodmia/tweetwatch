var user = new UserModel('ctodmia')
    var UserComponent = React.createClass({
      componentWillMount : function() {
         user.on("change", (function() {
           this.forceUpdate();
         }.bind(this)));
       },
       componentWillUnmount : function() {
         user.off("change");
       },
        render: function() {
            return (
              <div>
                  <img src={this.props.user.get("image")} />
                  <h5>{this.props.user.get("name")}</h5>
                  <p>@{this.props.user.get("screenname")}</p>
                  <p>{this.props.user.get("description")}</p>
              </div>
            );
        }
    });

    ReactDOM.render(
      <div>
        <UserComponent user={user} /> 
      </div>, document.getElementById('content')
    );