const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const middle = function(arr) {
  const len = arr.length;

  let output = [];

  if (len < 3) { } else if (len % 2 === 0) {
    output.push(Math.floor((len + 1) / 2));
    output.push(Math.ceil((len + 1) / 2));
  } else {
    output.push(Math.floor((len + 1) / 2))
  }

  return output;
};

// CODE TESTS
if (module.parent === null) {
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
}

// EXPORT FUNCTIONALITY
module.exports = middle;