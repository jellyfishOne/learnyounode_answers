/*
Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your
program.

You will be provided with the location of the file to server as the second
command-line argument. You must use the fs.createReadStream() method to
stream the file contents to the response.
*/


var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'content-type': 'text/plain' })
    //Creates a stream representing the file given as a command-line argument.
    //The method returns a stream object which can use src.pipe(dst) to pipe
    //the data from the src stream to the dst stream.
    fs.createReadStream(file).pipe(response);
})
server.listen(port);
