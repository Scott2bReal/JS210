/*
The oddities function takes an array as an argument and returns a new array
containing every other element from the input array. The values in the returned
array are the first (index 0), third, fifth, and so on, elements of the input
array. The program below uses the array returned by oddities as part of a
comparison. Can you explain the results of these comparisons?
*/

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);      // false
console.log(oddities(['abc', 'def']) === ['abc']);         // false

// JavaScript will always return false when arrays are compared for equality
// using the equality comparison operators, because they are not the exact same
// objects. They merely contain the same values