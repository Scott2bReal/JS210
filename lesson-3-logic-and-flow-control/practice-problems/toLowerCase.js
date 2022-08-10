/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII
numeric representation from the ASCII table, add 32 to that number, then
convert the number back to a character using the same ASCII table. You can use
the String.fromCharCode and the String.charCodeAt methods for these operations.
For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
*/

const converToLower = (letter) => {
  newCode = letter.charCodeAt(0) + 32;
  return String.fromCharCode(newCode);
}

const toLowerCase = (string) => {
  const lowerCaseRange = [97, 122];
  const upperCaseRange = [65, 90];
  let lowerCaseString = '';
  let charCode;

  for (let index = 0; index < string.length; index++) {
    charCode = string.charCodeAt(index);

    if (charCode < upperCaseRange[0] || charCode > upperCaseRange[1]) {
      lowerCaseString += string[index];
    } else if (charCode >= lowerCaseRange[0] && charCode <= lowerCaseRange[1]) {
      lowerCaseString += String.fromCharCode(charCode + 32);
    } else lowerCaseString += converToLower(string[index]);
  }

  console.log(lowerCaseString);
  return lowerCaseString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
