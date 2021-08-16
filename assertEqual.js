// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual('lighthouse labs', 'bootcamp');
assertEqual(1, 1);
assertEqual('lighthouse labs', 'lighthouse labs');
assertEqual(1, 2);

// EXPORT FUNCTIONALITY FROM THIS FILE
module.exports = assertEqual;