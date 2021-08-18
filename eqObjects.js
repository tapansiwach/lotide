const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const eqObjects = function(obj1, obj2) {
  let result;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  };

  for (let key in obj1) {
    if (key in obj2) {
      if (Array.isArray(obj2[key])) {
        // check if array values are equal
        result = eqArrays(obj2[key], obj1[key]);
      } else {
        // check for primitive values
        result = (obj1[key] === obj2[key]);
      }
    } else {
      result = false;
    }
    if (!result) break;
  }

  return result;
};

// CODE TESTS
if (module.parent === null) {
  // test primitive values
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true);

  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false);

  // test array values
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true);

  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false);
}

// EXPORT FUNCTIONALITY
module.exports = eqObjects;
