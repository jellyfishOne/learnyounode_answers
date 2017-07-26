/*
Create a program that prints a list of files in a given directory,
filtered by the extension of the file. The first argument is the directory
name and the second argument is the extension filter. Print the list of files
(one file per line) to the console.

You must write a model file to do most of the work. The module must export
a single function that takes three arguments: the directory name, the file name
extension string and a callback function, in that order
*/
var lslib = require('./modular');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
