const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, val) {
  let result;

  for (key in obj) {
    if (obj[key] === val) {
      result = key;
      break;
    }
  }

  return result;
};

// CODE TESTS
if (module.parent === null) {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
}

// EXPORT FUNCTIONALITY
module.exports = findKeyByValue;