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
