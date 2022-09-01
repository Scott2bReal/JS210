/*
A double number is an even-length number whose left-side digits are exactly the
same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all
double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; otherwise, return the double
number as-is.

Algorithm:
  1. if number has even # of digits, check if double number
  2. if double number, return it
  3. if not, return num * 2
*/

const isDoubleNumber = (string) => {
  let left = '';
  let right = '';
  const endMiddle = Math.floor(string.length / 2);

  for (let index = 0; index < endMiddle; index++) {
    left += string[index];
  }

  for (let index = endMiddle; index < string.length; index++) {
    right += string[index];
  }

  return left === right;
}

const twice = (num) => {
  let numString = String(num);

  if (numString.length % 2 === 0 && isDoubleNumber(numString)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);  // 668866
console.log(twice(444) === 888);        // 888
console.log(twice(107) === 214);        // 214
console.log(twice(103103) === 103103);  // 103103
console.log(twice(3333) === 3333);      // 3333
console.log(twice(7676) === 7676);      // 7676
