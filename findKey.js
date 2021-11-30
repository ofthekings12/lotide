const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
  return assertEqual;
};

const findKey = function (obj, callback) {
  const theKeysToLookThrough = Object.keys(obj);
  for (const key of theKeysToLookThrough) { 
    let thingToTest = obj[key]; 
    if (callback(thingToTest) === true) { 
      console.log('Found the key 😀', key);
      return key;
    } else { 
      console.log('This is not they key 😩:', key, obj[key], callback(obj[key]));
    }
  }
};

findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  function(x){ return x.stars === 2} 
); // => "noma"

