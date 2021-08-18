const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;

  const actual = eqObjects(obj1, obj2);

  if (actual === true) {
    console.log(`\u2705 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`\u274c Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }

};

// CODE TESTS
if (module.parent === null) {
  console.log(assertObjectsEqual({}, {})); // => true
  console.log(assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" })); // => true
  console.log(assertObjectsEqual({ a: "3", b: "2" }, { a: "1", b: "2" })); // => false
  console.log(assertObjectsEqual({ a: "3", b: "2", c: "1" }, { a: "3", b: "2" })); // => false
}

// EXPORT FUNCTIONALITY
module.exports = assertObjectsEqual;