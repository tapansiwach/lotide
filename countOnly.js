const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const countOnly = function(arr, obj) {
  let output = {};

  for (let item of arr) {
    if (obj[item] === true) {
      if (output[item] === undefined) {
        output[item] = 1;
      } else {
        output[item] += 1
      }
    }
  }

  return output;
};

// CODE TESTS
if (module.parent === null) {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
}

// EXPORT FUNCTIONALITY
module.exports = countOnly;