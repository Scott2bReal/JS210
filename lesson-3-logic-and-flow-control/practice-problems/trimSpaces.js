/*
Write a function that takes a string as an argument, and returns the string
stripped of spaces from both ends. Do not remove or alter internal spaces.

input: string
output: string with all spaces removed

algorithm:
  1. init new empty string
  2. for each char in iput string
    3. if char is not a space, add to blank string
  4. return new string
*/

const firstNonSpace = (string) => {
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== ' ') {
      return index;
    }
  }

  return string.length - 1;
}

const lastNonSpace = (string) => {
  for (let index = string.length - 1; index >= 0; index--) {
    if (string[index] !== ' ') {
      return index;
    }
  }
}

const trimSpaces = (string) => {
  let trimmedString = '';
  let firstChar = firstNonSpace(string);
  let lastChar = lastNonSpace(string);

  for (let index = firstChar; index <= lastChar; index++) {
    trimmedString += string[index]
  }

  console.log(trimmedString);
  return trimmedString;
}

trimSpaces('  abc  ');  // "abc"
trimSpaces('abc   ');   // "abc"
trimSpaces(' ab c');    // "ab c"
trimSpaces(' a b  c');  // "a b  c"
trimSpaces('      ');   // ""
trimSpaces('');         // ""
