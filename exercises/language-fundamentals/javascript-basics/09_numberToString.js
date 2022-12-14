/*
In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

You will learn more about converting strings to numbers by writing a function
that takes a positive integer or zero, and converts it to a string
representation.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
as '' + number. Your function should do this the old-fashioned way and
construct the string by analyzing and manipulating the number.
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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
