/*
Write a program that uses a single synchronous filesystem operation
to read a file and print the number of newlines (\n) it contains
to the console, similar to running car file | wc -1
*/

//load fs module to perform fylesystem operations
var fs = require('fs');

//read file directory from command line
var fileDir = process.argv[2];

//read file, returns a buffer
var buf = fs.readFileSync(fileDir);

//convert the bufer into a string
var str = buf.toString();

//split string, ends up with one more element than the number
//of new lines.
var arr = str.split("\n");

//count number of new lines
var newLine = 0;
for(var i = 0; i < arr.length -1; i++){
  newLine ++;
}

//print result
console.log(newLine);

//////////////////////Given Solution///////////////////////////////

    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
