const assertEqualTest = require('../assertEqual');

const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqualTest(result.length, 2); // ensure we get back two elements
assertEqualTest(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqualTest(result[1], "Labs"); // ensure second element is "Labs"
const words = tail(["Lighthouse", "Labs"]);
assertEqualTest(words.length, 3);
assertEqualTest(words.length, 2);
assertEqualTest(words.length, 1);

const input = tail(["hi"]);
assertEqualTest(input.length, 3);
