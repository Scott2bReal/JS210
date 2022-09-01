/*
Write a function that determines and returns the UTF-16 string value of a
string passed in as an argument. The UTF-16 string value is the sum of the
UTF-16 values of every character in the string. (You may use
String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
*/

const utf16Value = (string) => {
  if (string === '') {
    return 0;
  }

  let chars = [];

  for (let index = 0; index < string.length; index++) {
    chars.push(string.charCodeAt(index));
  }

  return chars.reduce((a, b) => a + b);
}

console.log(utf16Value('Four score') === 984);         // 984
console.log(utf16Value('Launch School') === 1251);      // 1251
console.log(utf16Value('a') === 97);                  // 97
console.log(utf16Value('') ===  0);                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);  // 2811
