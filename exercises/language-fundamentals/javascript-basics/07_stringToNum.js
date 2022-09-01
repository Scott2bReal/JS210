/*
For this exercise we're going to learn more about type conversion by
implementing our own parseInt function that converts a string of numeric
characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the
appropriate number. Do not use any of the built-in functions for converting a
string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

Algorithm:
  1. split string into digits
  2. map array of int digits backwards
  3. init sum
  4. iterate through that array
  5. map ints array to 10 to the index power
  6. calculate sum of array
*/

const DIGITS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

const stringToInteger = (string) => {
  const stringDigits = string.split('');
  let digits = [];
  let sum = 0;

  for (let index = stringDigits.length - 1; index >= 0; index--) {
    digits.push(stringDigits[index]);
  }

  for (let index = 0; index < digits.length; index++) {
    sum += digits[index] * (10 ** index);
  }

  return sum;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
