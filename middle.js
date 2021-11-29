// const eqArrays = function (array1, array2) {
//   if (array1 === array2) {
//     return true;
//   } else if (array1 == null || array2 == null) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
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

module.exports = middle;
