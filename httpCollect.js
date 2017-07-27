/*
Write a program that performs an HTTP GET request to a URL provided to your
as the first command-line argument. Collect ALL data from the server (not just
the first 'data' event) and then write two lines to the console.

The first line you write should just be an integer representing the number of
characters receivd from the server. The second line should contain the complete
String of characters sent by the server.
*/

//$ npm install bl

var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  response.pipe(bl(function(err,data){
    if(err)
    {
      return console.log(err);
    }
    console.log(data.toString().length)
    console.log(data.toString());
  }))
})
