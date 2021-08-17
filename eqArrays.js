const assertEqual = require("./assertEqual");

const eqArrays = function (firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let j = 0; j < firstArr.length; j++) {
    if (firstArr[j] !== secondArr[j]) {
      return false;
    }
  }
  return true;
};

// CODE TESTS
if (module.parent === null) {
  console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
  console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
}

// EXPORT FILE
module.exports = eqArrays;