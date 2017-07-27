/*
Write an HTTP server that receives only POST requests and converts incoming
POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to
your program.
*/

//To install through2-map through terminal type:
//  $ npm install through2-map

var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

//create HTTP server
var server = http.createServer(function (req, res) {
  //validate it's a POST request
  if(req.method !== 'POST'){
    return res.end('Request must be POST');
  }

  //Convert characters to upper-case and return to client
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res)
})

server.listen(port);
