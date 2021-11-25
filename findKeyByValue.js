const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
  return assertEqual;
};

const findKeyByValue = function (object, value) {
  console.log(Object.keys(object));
  let theKey;

  const objectKeysToExamine = Object.keys(object); // this is an array ["sci-fi, etc"]

  for (let key of objectKeysToExamine) {
    if (object[key] === value) {
      theKey = key;
    }
  }
  return theKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
