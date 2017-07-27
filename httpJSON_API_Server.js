/*
Write an HTTP server that serves JSON data when it receives a GET request to the
path '/api/parsetime'. Expect the request to contain a query string with a key
'iso' and an ISO-format time as the value.

For example:
/api/parsetime?iso=2013-08-10T12:10:15.474z

The JSON response should contain only 'hour', 'minute', and 'second' properties.
For example:
{
  'hour': 14,
  'minute': 23,
  'second': 15
}

Add second endpoint for the path 'api/unixtime' which accepts the same query string
but returns UNIX epoch time in milliseconds (the number of milliseconds since
1 jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:
  { 'unixtime': 1376136615474 }

Your server should listen on the port provided by the first argument to your
program.
*/

var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  //parse the URL
  var urlObj = url.parse(req.url, true);

  //get date
  var date = new Date(urlObj.query.iso);

  var response = null;

  //check path names
  if(urlObj.pathname === '/api/parsetime'){
    response = {
      'hour' : date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds(),
    };
  }else if(urlObj.pathname === '/api/unixtime'){
    response = {
      'unixtime': date.getTime()
    };
  }
  //set content-type and respond
  if(response){
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(response));
  }else{
    res.writeHead(404);
    res.end();
  }

})
server.listen(port);
