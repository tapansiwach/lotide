const assertEqual = require("./assertEqual");

const eqArrays = function(firstArr, secondArr) {
  let result = true;
  if (firstArr.length !== secondArr.length) {
    result = false;
  }
  for (let j = 0; j < firstArr.length; j++) {
    if (Array.isArray(firstArr[j]) && Array.isArray(secondArr[j])) {
      result = eqArrays(firstArr[j], secondArr[j]);
    }
    else if (firstArr[j] !== secondArr[j]) {
      result = false;
    }
  }
  return result;
};

// CODE TESTS
if (module.parent === null) {
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


  // test for nested arrays
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
}

// EXPORT FILE
module.exports = eqArrays;