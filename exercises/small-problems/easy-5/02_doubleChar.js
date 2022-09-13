/*
Write a function that takes a string, doubles every consonant character in the
string, and returns the result as a new string. The function should not double
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const doubleConsonants = (string) => {
  if (string === '') {
    return '';
  }

  let newArray = [];
  let chars = string.split('');

  for (let index = 0; index < chars.length; index++) {
    const char = chars[index];

    if (/[A-Za-z]/.test(char) && !VOWELS.includes(char.toLowerCase())) {
      newArray.push(char, char);
    } else {
      newArray.push(char);
    }
  }

  return newArray.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
