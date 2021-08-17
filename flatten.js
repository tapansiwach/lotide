const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// Define a global variable which may be accessed at any depth during recusion
let flattened = [];

// FUNCTION IMPLEMENTATION
const flatten = function (deepArray) {
  deepArray.forEach(x => {
    if (Array.isArray(x)) {
      flatten(x);
    } else {
      flattened.push(x);
    }
  });

  return flattened;
};

// CODE TESTS
if (module.parent === null) {
  console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
}

// EXPORT FUNCTIONALITY
module.exports = flatten;