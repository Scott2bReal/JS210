/*
Write a function that takes two arguments:

    a string to be split
    a delimiter character

The function logs the split strings to the console, as shown below:

input: string, delimiter
output: each string, without delimiter

algorithm:
  1. init empty string
  2. Guard clause for missing delimiter
  3. Guard clause for empty string delim
  4. for each char in input, add that char to empty if not delim
  5. if char is delim, log the growing string, reset it, and continue
*/

const splitString = (string, delimiter) => {
  if (delimiter === undefined) {
    console.log("ERROR: Noe delimiter")
    return;
  } else if (delimiter === '') {
    for (let index = 0; index < string.length; index++) {
      console.log(string[index]);
    }
  } else {
    let subString = '';

    for (let index = 0; index < string.length; index++) {
      if (string[index] === delimiter) {
        console.log(subString);
        subString = '';
      } else {
        subString += string[index];
      }
    }

    if (subString.length > 0) {
      console.log(subString);
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
