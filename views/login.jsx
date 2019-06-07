var React = require("react");
var Header = require('./header');
var Navbar = require('./navbar');


class Login extends React.Component {
  render() {

    // let tweets = this.props.ccb.map(tweet => {
    //                           return <div>
    //                           <h3>User Id {tweet.user_id}</h3>
    //                           <p>{tweet.username}</p>
    //                           <p>{tweet.tweets}</p>
    //                           </div>
    //                         });

    return (
      <html>
        <Header/>
        <Navbar/>
        <body>
          <div class="admin-login">
          <br/> <br/>
          <h3>Admin Login</h3>
            <form method="post" action="/admin">
            <label for="id" class="mr-2">Username</label>
            <input type="text" name="username" class="mr-2"/>

            <label for="id" class="mr-2">Password</label>
            <input type="password" name="password" class="mr-2"/>

            <button type="submit" class="btn submit-button">Login</button>

          </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;