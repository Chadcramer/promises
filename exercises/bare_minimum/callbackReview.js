/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(`${filePath}`, "utf8", (err, line) => {
    if(err){
      callback(err);
    } else {
      line = line.split("\n");
      line.length = 1;
      callback(null, line.toString());
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
getStatusCode = (url, callback) => {
  request(url, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};