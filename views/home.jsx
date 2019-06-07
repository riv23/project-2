var React = require("react");

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.name}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.name}</h3>
      <p>{post.activity}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

class Home extends React.Component {
    render() {
        console.log(this.props.obj)

        const babies = this.props.obj.map((item) =>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td>{item.activity}</td>
                <td>{item.comments}</td>
            </tr>
        );


        return (
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <title>BABY!</title>
                </head>
                <body>
                    <span>
                        <h1>Baby Monitoring Activity</h1>
                        <h3>Baby Log</h3>
                        <div class="custom-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Date</th>
                                        <th>Baby</th>
                                        <th>Time</th>
                                        <th>Activity</th>
                                        <th>Comments</th>
                                    </tr>
                                    {babies}
                                </thead>
                            </table>
                        </div>
                    </span>
                </body>
            </html>
        );
    }
}

module.exports = Home;