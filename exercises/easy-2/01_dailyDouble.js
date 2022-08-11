/*
Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.
*/

const crunch = (string) => {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index - 1]) {
      newString += string[index];
    }
  }

  return newString;
}

// TODO regex solution
const crunchWithRegex = (string) => {
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunch('4444abcabccba') === "4abcabcba");                 // "4abcabcba"
console.log(crunch('ggggggggggggggg') === "g");                       // "g"
console.log(crunch('a') === "a");                                     // "a"
console.log(crunch('') === "");                                       // ""

console.log(crunchWithRegex('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunchWithRegex('4444abcabccba') === "4abcabcba");                 // "4abcabcba"
console.log(crunchWithRegex('ggggggggggggggg') === "g");                       // "g"
console.log(crunchWithRegex('a') === "a");                                     // "a"
console.log(crunchWithRegex('') === "");                                       // ""
