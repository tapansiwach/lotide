# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tapansiwach/lotide`

**Require it:**

`const _ = require('@tapansiwach/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Uses eqArrays function in this library to check for equality and then asserts if the two arrays are equal. 
* `assertEqual(actual, expected)`: Asserts if two input values (of primitive types) are equal.
* `assertObjectsEqual(object1, object2)`: Uses eqObjects function in this library to check for equality and then asserts if the two objects are equal. 
* `countLetters(sentence)`: Counts the frequency of occurance of different letters in a sentence
* `countOnly(array, object)`: Counts the frequency of occurance of items in an array if they are described as to be counted via a given object.
* `eqArrays(array1, array2)`: Checks if two arrays are equal.
* `eqObjects(object1, object2)`: Checks if two objects are equal.
* `findKey(object, callback)`: Finds a key in an object which satisfies the condition evaluated through a given callback.
* `findKeyByValue(object, value)`: Finds an object's key corrosponding to a provided value.
* `flatten(deepArray)`: Flattens a deep / nested array.
* `head(array)`: Returns the first item of an array.
* `letterPositions(sentence)`: Returns an object which contains the position(s) of diferrent letters in a sentence.
* `map(array, callback)`: Maps the items of an array as per a provided callback.
* `middle(array)`: Returns the middle (if length of an input array is odd) or middle two items (if length of an input array is even) of an array.
* `tail(array)`: Returns the last two indicesc of an array.
* `takeUntil(array, callback)`: Returns an array containing items of a provided array until an item in the provided array meets a condition (defined by a callback).
* `without(array1, array2)`: Returns an array which contains items in a source array (array1) without the items contained in another array (array2).