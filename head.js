// IMPORT FUNCTIONALITY FROM PARALLEL FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const head = function(arr) {
  return arr[0];
};

// CODE TESTS
if (module.parent === null) {

  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head([5]), 5);
  assertEqual(head([]), undefined);

}

// EXPORT FUNCTIONALITY
module.exports = head;