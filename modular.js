/*
Prints a list of files in a given directory, filtered by the extension
of files.

The module esports a single function that takes three arguments: the directory
name, the file name extension string and a callback function, in that order.
*/

var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
};
