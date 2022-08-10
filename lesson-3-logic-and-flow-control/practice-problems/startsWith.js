/*
Implement a function that determines whether a string begins with another
string. If it does, the function should return true, or false otherwise.

input: string, substring
output: true or false

algorithm:
  1. loop through string for length of subString
  2. if at any point current char doesn't match corresponding char in sub, return false
*/

const startsWith = (string, subString) => {
  for (let index = 0; index < subString.length; index++) {
    if (string[index] !== subString[index]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
