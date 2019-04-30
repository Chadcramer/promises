/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
pluckFirstLineFromFileAsync = (filePath) => {
  return new Promise(function(resolve, reject) {
    fs.readFile(`${filePath}`, "utf8", (err, line) => {
      if(err) {
        reject(err);
      } else {
        line = line.split("\n");
        line.length = 1;
        resolve(line.toString());
      };
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
getStatusCodeAsync = (url) => {
  return new Promise(function(resolve, reject){
    request(url, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      };
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
