/*
The previous exercise mimics the parseInt function to a lesser extent. In this
exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number.
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

const stringToSignedInteger = (string) => {
  let sign = '';
  let chars = string.split('');

  if (chars[0] === '+' || chars[0] === '-') {
    sign = chars.shift();
  }

  let num = stringToInteger(chars.join(''));

  if (sign === '-') {
    num = num - (num * 2);
  }

  return num;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
