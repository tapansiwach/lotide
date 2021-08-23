const assert = require('chai').assert;

const countOnly = require("../countOnly");

describe("#countOnly", () => {

  it("returns {Jason: 1, Fang: 2} for the defined array and object", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {
      Jason: 1,
      Fang: 2,
    })
  });

});