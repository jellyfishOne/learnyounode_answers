/*
Write a program that uses single asynchronous filesystem operation to read a
a file and print the number of newLines it contains to the console, similar
to running cat file | wc -l .

The full path to the file to read will be provided as the first command-line argument.
*/

var fs = require('fs');
var path = process.argv[2];


fs.readFile(path, function donereading(err, fileContent){
    var lines = fileContent.toString().split('\n').length - 1;
      console.log(lines);
})
