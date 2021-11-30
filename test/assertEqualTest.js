const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// assertEqual()
// describe("#assertEqual", () => {
//   it("returns true if they are equal", () => {
//     assert.deepEqual(("Lighthouse Labs", "Bootcamp"));
//   });
//   it("returns true if they are equal", () => {
//     assert.deepEqual(("1", "1"));
//   });
// });

// describe("#assertEqual", () => {
//   it("returns false if not equal", () => {
//     assert.strictEqual(assertEqual(["Lighthouse Labs"]), "Bootcamp");
//   });
//   it("returns true if equal", () => {
//     assert.strictEqual(assertEqual(['1']), '1'); 
//   });

// });


// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
