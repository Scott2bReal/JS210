/*
In the previous exercise, you reimplemented a function that converts
non-negative numbers to strings. In this exercise, you're going to extend that
function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
as '' + number. You may, however, use the integerToString function from the
previous exercise.
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

const integerToString = (int) => {
  let digits = [];
  let remainder = 0;

  do {
    remainder = int % 10;
    digits.unshift(DIGITS[remainder]);
    int = Math.floor(int / 10);
  } while (int > 0)

  return digits.join('');
}

const signedIntegerToString = (int) => {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0) {
    return '-' + integerToString(Math.abs(int));
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
