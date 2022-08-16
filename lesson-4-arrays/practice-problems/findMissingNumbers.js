/*
1.
Write a function that takes a sorted array of integers as an argument, and
returns an array that includes all the missing integers (in order) between the
first and last elements of the argument.
*/

const missing = (arr) => {
  let counter = arr[0];
  let missingNums = [];

  while (counter <= arr[arr.length -1]) {
    if (arr.includes(counter)) {
      counter++
      continue;
    }

    missingNums.push(counter);
    counter++;
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
