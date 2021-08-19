const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// CODE TESTS
if (module.parent === null) {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
}

// EXPORT FUNCTIONALITY
module.exports = map;