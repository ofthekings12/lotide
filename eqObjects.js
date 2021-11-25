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
};

const eqArrays = function (array1, array2) {
  if (array1 === array2) {
    return true;
  } else if (array1 == null || array2 == null) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      return false;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);

  if (keyArray1.length === keyArray2.length) {
    for (let key of keyArray1) {
      if (Array.isArray(object1[key])) {
        const isEqual = eqArrays(object1[key], object2[key]);

        if (!isEqual) {
          return false;
        }
      } else {
        if (!object2[key] || object2[key] !== object1[key]) {
          return false;
        }
      }
    }

    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
