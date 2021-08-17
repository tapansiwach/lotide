const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  let actual = eqArrays(arr1, arr2);

  if (actual === true) {
    console.log(`\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u274c Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// CODE TESTS
if (module.parent === null) {
  console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
  console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

  console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
  console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
}