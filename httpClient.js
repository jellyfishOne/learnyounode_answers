/*
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each "data"
even from the response to a new line on the console
*/

var http = require('http');

var url = process.argv[2];

//http.get first argument can be the URL
//second argument is a function callback (response){...}
http.get(url, function(response){
  //setEncoding('urf8') will emit Strings rather than the standard Node
  //Buffer objects which you have to explicitly convert to Strings
  response.setEncoding('utf8');

  //response objecte is a Node Stream object. You can treat Node Stream as
  //objects that emit events. The three events that are of most interest are:
  // "data", "error", and "end".
  response.on('data', function(data){
    console.log(data);
  });
  response.on('error', function(e){
    console.log(e);
  });
});
