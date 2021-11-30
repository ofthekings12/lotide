const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetter');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const eqArrays = require('./eqArrays');
const map = require('./map');
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertObjectsEqual,
  assertArraysEqual,
  countLetter,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  eqArrays,
  takeUntil, 
  without
  
};