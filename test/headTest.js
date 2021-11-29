const assertEqualTest = require('../assertEqual');
const head = require('../head');


// TEST CODE
assertEqualTest(head([5, 6, 7]), 5);
assertEqualTest(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqualTest(head(["one"]), "one");
assertEqualTest(head([]));
assertEqualTest(head(["Hello", "Lighthouse", "Labs"]), "Labs");
