/*
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that each
string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces.
*/

// const swap = (string) => {
//   let words = string.split(' ');
//
//   for (let index = 0; index < words.length; index++) {
//     let chars = words[index].split('');
//     let placeholder = chars[0];
//     chars[0] = chars[chars.length - 1];
//     chars[chars.length - 1] = placeholder;
//     words[index] = chars.join('');
//   }
//
//   return words.join(' ');
// }

/*
Further Exploration:

How can you refactor this problem using the Array.prototype.map method instead?
*/

const swapLetters = (word) => {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

const swap = (string) => {
  let words = string.split(' ');

  return words.map(word => swapLetters(word)).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
