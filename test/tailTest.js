const assert = require("chai").assert;

const assertEqualTest = require('../assertEqual');

const tail = require('../tail');

describe("#tail", () => {
  const result = ["Hello", "Lighthouse", "Labs"];
  it("returns 3 for result.length", () => {
    assert.strictEqual((result.length), 3);
  });
  it("returns 2 for tail(result).length", () => {
    assert.strictEqual(tail(result).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(result)", () => {
    assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
  });
});


