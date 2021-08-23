const assert = require("chai").assert;

// const assertEqual = require("../assertEqual");
const tail = require("../tail");

describe("#tail", () => {

  it("returns last two elements of an array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it("return an empty array when given an empty array", () => {
    assert.strictEqual(tail([])[0], undefined);
  });

  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

});