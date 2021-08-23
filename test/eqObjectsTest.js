const assert = require('chai').assert;

const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  it("returns that {} is equal to {}", () => {
    assert.deepEqual(eqObjects({}, {}), true);
  });

  it('returns that { a: "1", b: "2" } and { b: "2", a: "1" } are equal', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns that { a: "1", b: "2" } and { a: "1", b: "2", c: "3" } are NOT equal', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });

  it('returns that { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" } are equal', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('returns that { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] } are NOT equal', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });

  it('returns that { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } are equal', () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns that { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } are NOT equal', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it('returns that { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 } are NOT equal', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});
