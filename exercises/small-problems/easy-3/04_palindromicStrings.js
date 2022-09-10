/*
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.
*/

// const isPalindrome = (string) => {
//   let chars = string.split('');
//   let reversedChars = [];
//
//   for (let index = chars.length - 1; index >=0; index--) {
//     reversedChars.push(chars[index]);
//   }
//
//   for (let index = 0; index < chars.length; index++) {
//     if (chars[index] !== reversedChars[index]) {
//       return false;
//     }
//   }
//
//   return true;
// }

// Can also be solved with a one-liner using Array methods:
const isPalindrome = (string) => {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
