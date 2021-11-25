const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
  return assertEqual;
};

const tail = function (array) {
  return array.slice(1);
};

// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = tail(["Lighthouse", "Labs"]);
assertEqual(words.length, 3);
assertEqual(words.length, 2);
assertEqual(words.length, 1);

const input = tail(["hi"]);
assertEqual(input.length, 3);
