const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const countLetters = function(sentence) {
  let output = {};

  for (let char of sentence) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }

  return output;
};

// CODE CHECKS
if (module.parent === null) {
  console.log(countLetters("aaabbbb"));
  assertEqual(countLetters("aaabbbb").a, 3);
  assertEqual(countLetters("aaabbbb").b, 4);
  console.log(countLetters("this is the way"));
}

// EXPORT FUNCTIONALITY
module.exports = countLetters;