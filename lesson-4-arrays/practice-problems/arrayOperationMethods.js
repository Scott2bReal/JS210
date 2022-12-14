/*
1.
Write a function named push that accepts two arguments: an Array and any other
value. The function should append the second argument to the end of the Array,
and return the new length of the Array.
*/

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
}

// let count = [0, 1, 2];
// push(count, 3);         // 4
// console.log(count);     // [ 0, 1, 2, 3 ]

/*
2.
Write a function named pop that accepts one argument: an Array. The function
should remove the last element from the array and return it.
*/

const pop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const removed = array[array.length - 1];
  array.length = array.length - 1;

  return removed;
}

/*
3.
Write a function named unshift that accepts two arguments: an Array and a
value. The function should insert the value at the beginning of the Array, and
return the new length of the array. You will need a for loop for this problem.
*/

const unshift = (array, value) => {
  for (let index = 1; index <= array.length; index++) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

/*
4.
Write a function named shift that accepts one argument: an Array. The function
should remove the first value from the beginning of the Array and return it.
*/

const shift = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const removed = array[0];

  for (let index = 0; index < array.length; index++) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return removed;
}

/*
5.
Write a function indexOf that accepts two arguments: an array and a value. The
function returns the first index at which the value can be found, or -1 if the
value is not present.
*/

const indexOf = (array, value) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

/*
6.
Write a function lastIndexOf that accepts two arguments: an array and a value.
The function returns the last index at which the value can be found in the
array, or -1 if the value is not present.
*/

const lastIndexOf = (array, value) => {
  for (let index = array.length - 1; index <= 0; index--) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

/*
7.
Write a function named slice that accepts three arguments: an Array, a start
index, and an end index. The function should return a new Array that contains
values from the original Array starting with the value at the starting index,
and including all values up to but not including the end index. Do not modify
the original Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods.
*/

const slice = (array, start, end) => {
  let newArray = [];

  for (let index = start; index < end; index++) {
    push(newArray, array[index]);
  }

  return newArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

/*
8.
Write a function named splice that accepts three arguments: an Array, a start
index, and the number of values to remove. The function should remove values
from the original Array, starting with the start index and removing the
specified number of values. The function should return the removed values in a
new Array.

algorithm:
  1. init new array
  2. iterate thru old array, starting at start index
  3. copy current value to new array
  4. set current index at old array to array[index + size]
*/

const splice = (array, start, size) => {
  let newArray = [];

  for (let index = start; index < start + size; index++) {
    push(newArray, array[index]);
    array[index] = array[index + size];
  }

  array.length = array.length - size;
  return newArray;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

/*
9.
Write a function named concat that accepts two Array arguments. The function
should return a new Array that contains the values from each of the original
Arrays.
*/

const concat = (arrayOne, arrayTwo) => {
  let newArray = [];

  for (let index = 0; index < arrayOne.length; index++) {
    push(newArray, arrayOne[index]);
  }

  for (let index = 0; index < arrayTwo.length; index++) {
    push(newArray, arrayTwo[index]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

/*
10.
Write a function named join that accepts two arguments: an Array and a String.
The function should coerce each value in the Array to a String, and then join
those values together using the second argument as a separator. You may assume
that a separator will always be passed.

You can call the String function on any JavaScript value to get its String
representation.
*/

const join = (array, delim) => {
  newString = '';

  for (let index = 0; index < array.length; index++) {
    newString += String(array[index]);
    if (index < array.length - 1) {
      newString += delim;
    }
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
