/*
Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to
filter the list to only files that end with .txt. Note that the second
argument will not come prefixed with a '.'.

Keep in mind that the first arguments of your program are not the first
values of the process.argv array, as the first two values are reserved for
system info by Node.

The list of files should be printed to the console, one file per line. You
must use asynchronous I/O.
*/

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

//fs.readdir() Reads the contents of a directory. The callback
//gets two arguments(err, files), where files is an array of the
//names of the files in the directory excluding '.' and '..'
fs.readdir(folder, function (err, files){
  if (err) return console.error(err)

  //the  forEach() method executes a provided function once for each
  //array element. In this case each element is a file.
  files.forEach(function (file){

    //path.extname() returns the extension of the path.
    //e.g. path.extname('index.html') returns: '.html'
    if (path.extname(file) === ext){
      console.log(file)
    }
  })
})
