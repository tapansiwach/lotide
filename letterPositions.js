const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMLEMENTATION
const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.split(" ").join("");

  sentence.split("").forEach((char, idx) => {
    if (!results[char]) {
      results[char] = [];
    }
    results[char].push(idx);
  });

  return results;
};

// CODE TESTS
if (module.parent === null) {
  // console.log(letterPositions("lighthouse in the house"));
  let result = letterPositions("hello");
  assertArraysEqual(result.h, [0]);
  assertArraysEqual(result.e, [1]);
  assertArraysEqual(result.l, [2, 3]);
  assertArraysEqual(result.o, [4]);
}

// EXPORT FUNCTIONALITY
module.exports = letterPositions;