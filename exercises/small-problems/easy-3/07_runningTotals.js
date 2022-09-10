/*
Write a function that takes an array of numbers and returns an array with the
same number of elements, but with each element's value being the running total
from the original array.
*/

// const runningTotal = (array) => {
//   let sum = 0;
//   let newArray = [];
//
//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//     newArray.push(sum);
//   }
//
//   return newArray;
// }

/*
Can you rewrite the solution using the Array.prototype.map method? What types
of problems do you think are well-suited for the Array.prototype.map method?

Problems where we need an array of the same number of elements are well suited
to using map
*/

const runningTotal = (array) => {
  let sum = 0;

  return array.map(element => sum += element);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
