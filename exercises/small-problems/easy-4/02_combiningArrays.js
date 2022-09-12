/*
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.
*/

const union = (arrayOne, arrayTwo) => {
  let combinedArray = [];

  for (let index = 0; index < arrayOne.length; index++) {
    if (combinedArray.includes(arrayOne[index])) {
      continue;
    } else {
      combinedArray.push(arrayOne[index])
    }
  }

  for (let index = 0; index < arrayTwo.length; index++) {
    if (combinedArray.includes(arrayTwo[index])) {
      continue;
    } else {
      combinedArray.push(arrayTwo[index])
    }
  }

  return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
