const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const without = function (source, itemsToRemove) {
  let output = [];

  source.forEach(x => {
    if (!itemsToRemove.includes(x)) {
      output.push(x);
    }
  });

  return output;
};

// ALTENRATE IMPLEMENTATION USING ARRAY FILTER
const withoutFilter = function (source, itemsToRemove) {
  return source.filter(x => !itemsToRemove.includes(x));
}

// CODE TESTS
if (module.parent === null) {
  console.log(without([1, 2, 3], [1])); // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

  console.log(withoutFilter([1, 2, 3], [1])); // => [2, 3]
  console.log(withoutFilter(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
}

// EXPORT FUNCTIONALITY
module.exports = without;