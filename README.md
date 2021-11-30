# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ofthekings12/lotide`

**Require it:**

`const _ = require('@ofthekings12/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* * `assertArraysEqual`: a function that asserts if two arrays are equals
* `assertEqual`: a function that asserts if two values are equals
* `assertObjectsEqual`: a function that asserts if two objects are equals
* `countLetters`: a function that returns occurrances of each letter in a string
* `countOnly`: a function that takes items and returns counts for a specific subset of those items
* `eqArrays`: a function that compares two arrays
* `eqObjects`: a function that compares two objects
* `findKey`: a function that scans an object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: a function that searches for a key on an object where its value matches a given value
* `head`: a function that retrieves the first element from an array
* `index`: a list of all the functions in an object
* `letterPositions`: a function that returns all the indexes in the string where each character is found
* `map`: a function that creates a new array with the results of calling a provided function on every element in the calling array
* `middle`: a function that returns the middle element of an array
* `tail`: a function that retrieves every element except the head (first element) of the array
* `takeUntil`: a function that returns a slice of the array with elements taken from the beginning
* `without`: a function that removes elements from an array