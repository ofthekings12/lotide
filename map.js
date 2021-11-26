const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
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

const words = ["guess", "whos", "back", "in", "the", "house"];

const map = function (arrayToMap, cbFunction) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(cbFunction(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ["g", "w", "b", "i", "t", "h"]));
