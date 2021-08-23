const assert = require('chai').assert;

const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it("return key of 'The Wire' is 'drama'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("return key of 'That 70s Show' is undefined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });

});
