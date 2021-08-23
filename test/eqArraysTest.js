const assert = require('chai').assert;

const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {

  it("returns that [1, 2, 3] and [1, 2, 3] are equal", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3], true);
  });

  it("returns that [1, 2, 3] and [3, 2, 1] are not equal", () => {
    assert.notDeepEqual([1, 2, 3], [3, 2, 1], true);
  });

  it('returns that ["1", "2", "3"] and ["1", "2", "3"] are equal', () => {
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"], true);
  });

  it('returns that ["1", "2", "3"] and ["1", "2", 3] are not equal', () => {
    assert.notDeepEqual(["1", "2", "3"], ["1", "2", 3], true);
  });

  it("returns that [[2, 3], [4]] and [[2, 3], [4]] are equal", () => {
    assert.deepEqual([[2, 3], [4]], [[2, 3], [4]], true);
  });

  it("returns that [[2, 3], [4]] and [[2, 3], [4, 5]] are not equal", () => {
    assert.notDeepEqual([[2, 3], [4]], [[2, 3], [4, 5]], true);
  });

  it("returns that [[2, 3], [4]] and [[2, 3], 4] are not equal", () => {
    assert.notDeepEqual([[2, 3], [4]], [[2, 3], 4], true);
  });

});

/**
 *
 const assertEqual = require("../assertEqual");
 const eqArrays = require("../eqArrays");


 assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
 assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
 assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
 assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
 assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


 // test for nested arrays
 assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
 assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
 assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

 */