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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(
      `❌❌❌ Assertion Failed: ${array1} !== ${array2} array lengths do not match`
    );
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(
        `❌❌❌ Assertion Failed: ${array1} !== ${array2} index of array1 does not equal index of array2`
      );
      return false;
    }
  }

  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  return true;
};

const middle = function (array) {
  let theMiddleArray = [];

  if (array.length % 2 === 0) {
    console.log("here");
    let theMiddle = array[Math.floor((array.length - 1) / 2)];
    theMiddleArray.push(theMiddle);

    let theSecondMiddle = array[Math.ceil((array.length - 1) / 2)];
    theMiddleArray.push(theSecondMiddle);
  } else if (array.length % 2 === 1) {
    let theMiddle = array[Math.round((array.length - 1) / 2)];
    theMiddleArray.push(theMiddle);
  }
  return theMiddleArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
