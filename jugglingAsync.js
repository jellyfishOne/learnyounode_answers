/*
This problem is the same as the previous problem (HTTP COLLECT) in that you need
to use http.get(). However, this time you will be provided with three URLS as
the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and
print it to the console. You don't need to print out the length, just the data
as a string; one line per URL. The catch is that you must print them out in the
same order as the URLs are provide to you as command-line arguments;
*/

var http = require('http');
var bl = require('bl');
var string = [];
var count = 0;

for(var i = 0; i < 3; i++){
  collect(i);
}

function collect(index){
  http.get(process.argv[2+index], function(response){
    response.pipe(bl(function(err,data){
      string[index] = data.toString();
      count++;
      if(count == 3){
        printResults();
      }
    }))
  })
}

function printResults(){
  for(var i = 0; i < string.length; i++){
    console.log(string[i]);
  }
}
