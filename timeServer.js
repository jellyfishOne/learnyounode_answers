/*
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first
argument to your program. For each connnection you must write the current date
and 24 hour time in the format:
    "YYYY-MM-DD hh:mm"
Followed by the newline character. Month, day, hour and minutes must be zero-filled
to 2 integers. For example:
    "2013-07-06 17:42"
After sending the string, close the connection.
*/

var net = require('net');
var port = process.argv[2];

//create the date
function getTime(){
  var date = new Date();
  var year = addZero(date.getFullYear());
  var month = addZero(date.getMonth() + 1); //starts at 0
  var day = addZero(date.getDate());
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  return (year + '-' + month +'-'+ day + ' ' + hours + ':' + minutes + '\n');
}

//zero-fills month, day, hour, and minutes to 2 integers
function addZero(n){
  return n < 10 ? '0' + n : n;
}
var server = net.createServer(function(socket){
  //write data to the socket and close the socket
  var data = getTime();
  socket.end(data);
});
server.listen(port)
