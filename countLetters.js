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
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(
        expected
      )}`
    );
  } else {
    console.log(
      `❌❌❌ Assertion Failed: ${JSON.stringify(actual)} !=== ${JSON.stringify(
        expected
      )}`
    );
  }
  return assertEqual;
};

const countLetters = function (sentence) {
  let letterCounts = {};
  for (let letter of sentence) {
    if (letterCounts.hasOwnProperty(letter)) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};

assertEqual(countLetters("hellooo"), { h: 1, e: 1, l: 2, o: 3 });
