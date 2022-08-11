/*
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer.
*/

const stringy = (num) => {
  let binaryString = '1';

  for (let index = 1; index < num; index++) {
    if (index % 2 === 0) {
      binaryString += '1';
    } else {
      binaryString += '0';
    }
  }

  return binaryString;
}

console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"
