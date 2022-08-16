/*
1.
Write a function that creates and returns a new array from its array argument.
The new array should contain all values from the argument array whose positions
have an odd index.
*/

function oddElementsOf(arr) {
  newArray = [];

  for (let index = 1; index < arr.length; index += 2) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]

/*
2.
Write a function that takes an array argument and returns a new array that
contains all the argument's elements in their original order followed by all
the argument's elements in reverse order.
*/

const forwardAndBack = (arr) => {
  return arr.concat(arr.slice(0).reverse());
}

console.log(forwardAndBack(digits));

/*
3.
Use the array sort method to create a function that takes an array of numbers
and returns a new array of the numbers sorted in descending order. Do not alter
the original array.
*/

function sortDescending(arr) {
  return arr.slice(0).sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

/*
4.
Write a function that takes an array of arrays as an argument, and returns a
new array that contains the sums of each of the sub-arrays.
*/

function matrixSums(arr) {
  let sums = [];

  for (let index = 0; index < arr.length; index++) {
    sums.push(arr[index].reduce((a, b) => a + b));
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

/*
5.
Write a function that takes an array, and returns a new array with duplicate
elements removed.
*/

function uniqueElements(arr) {
  let newArr = [arr[0]];

  for (let index = 0; index < arr.length; index++) {
    if (newArr.includes(arr[index])) {
      continue;
    }

    newArr.push(arr[index]);
  }

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
