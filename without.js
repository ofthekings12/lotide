const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    `❌❌❌ Assertion Failed: ${array1} !== ${array2} Lengths do not match`;
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(
        `❌❌❌ Assertion Failed: ${array1} !== ${array2} index of array1 do not match array2`
      );
      return false;
    }
  }
  console.log(
    `✅✅✅ Assertion Passed: ${array1} === ${array2} both arrays match`
  );
  return true;
};
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `✅✅✅ Assertion Passed: ${actual} === ${expected} both arrays match`
    );
  } else {
    console.log(
      `❌❌❌ Assertion Failed: ${actual} !=== ${expected} arrays no not match`
    );
  }
};

const eqArrays = function (array1, array2) {
  if (array1 === array2) {
    return true;
  } else if (array1 == null || array2 == null) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let k = 0; k < source.length; k++) {
    if (!itemsToRemove.includes(source[k])) {
      newArr.push(source[k]);
    }
  }
  return newArr;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
