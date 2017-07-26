/*
Write a program that uses a single synchronous filesystem operation
to read a file and print the number of newlines (\n) it contains
to the console, similar to running car file | wc -1

The full path of the file to read will be provided as the first command-line
argument (i.e., process.argv[2]). You do not need to make your own test file.
*/

//load fs module to perform filesystem operations
var fs = require('fs');

//read file directory from command line
var fileDir = process.argv[2];

//read file, returns a buffer
var buf = fs.readFileSync(fileDir);

//convert the bufer into a string
//split string, ends up with one more element than the number of new lines.
var str = buf.toString().split("\n").length - 1;

//print result
console.log(str);
