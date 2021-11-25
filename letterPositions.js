const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(
      `❌❌❌ Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(
        array2
      )}`
    );
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(
        `❌❌❌ Assertion Failed: ${JSON.stringify(
          array1
        )} !== ${JSON.stringify(array2)}`
      );
      return false;
    }
  }

  console.log(
    `✅✅✅ Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(
      array2
    )}`
  );
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
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

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
    return results;
  }
};

assertArraysEqual(letterPositions("hello"), {
  h: [0],
  e: [1],
  l: [3, 4],
  o: [5],
});
