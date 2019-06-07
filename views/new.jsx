var React = require("react");

class Form extends React.Component {
  render() {
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
                <h1>Add log</h1>
                <form method='post' action='/'>
                    Date <input type='date' name='date'/><br/>
                    Baby's name <input type='text' name='name'/><br/>
                    Time <input type='time' name='time'/><br/>
                    Activity <input type='text' name='activity'/><br/>
                    Comments <input type='text' name='comments'/><br/>
                    <input type='submit' />
                </form>
            </span>
        </body>
      </html>
    );
  }
}

module.exports = Form;


// CREATE TABLE baby23 (
//     id SERIAL PRIMARY KEY,
//     name TEXT,
// );