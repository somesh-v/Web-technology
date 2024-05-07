var http = require('http');
var url = require('url');
var querystring = require('querystring');

function onRequest(req, res) {
  var urlParts = url.parse(req.url, true); 

  var path = urlParts.pathname;
  console.log('Request for ' + path + ' received');

  var params = urlParts.query;
  var username = params["username"] || '';
  var id = params["id"] || '';
  var branch = params["branch"] || '';
  var mobileNo = params["phno"] || '';
  var gender = params["gender"] || '';
  var branchadd = params["branchadd"] || '';

  // HTML content for displaying the message in a table
  var htmlResponse = `
    <html>
    <head>
    <title>User Details</title>
    <style>
      table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
        margin: 20px auto;
      }
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
    </head>
    <body>
    <h2>User Details</h2>
    <table>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Username</td>
        <td>${username}</td>
      </tr>
      <tr>
        <td>ID</td>
        <td>${id}</td>
      </tr>
      <tr>
        <td>Branch</td>
        <td>${branch}</td>
      </tr>
      <tr>
        <td>Mobile No</td>
        <td>${mobileNo}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>${gender}</td>
      </tr>
      <tr>
        <td>Branch Address</td>
        <td>${branchadd}</td>
      </tr>
    </table>
    </body>
    </html>
  `;

  // Write the HTML response
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlResponse);
  res.end();
}

var server = http.createServer(onRequest);

// Error handling for server startup
server.on('error', function(err) {
  console.error('Server error:', err.message);
});

server.listen(9000, function() {
  console.log('Server is running...');
});
