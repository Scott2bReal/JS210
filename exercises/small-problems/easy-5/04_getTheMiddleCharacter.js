/*
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
*/

const middleTwoChars = (string) => {
  let middle = Math.floor(string.length / 2);

  return string.split('').slice(middle - 1, middle + 1).join('');
}

const middleChar = (string) => {
  let middle = Math.floor(string.length / 2);

  return string[middle];
}

const centerOf = (string) => {
  if (string.length % 2 === 0) {
    return middleTwoChars(string);
  } else {
    return middleChar(string);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
