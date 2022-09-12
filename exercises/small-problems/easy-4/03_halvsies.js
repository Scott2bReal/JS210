/*
Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.
*/

const halvsies = (array) => {
  const halfway = Math.ceil(array.length / 2);
  let arrayOne = [];
  let arrayTwo = [];

  for (let index = 0; index < array.length; index++) {
    if (index < halfway) {
      arrayOne.push(array[index]);
    } else {
      arrayTwo.push(array[index]);
    }
  }

  return [arrayOne, arrayTwo];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
