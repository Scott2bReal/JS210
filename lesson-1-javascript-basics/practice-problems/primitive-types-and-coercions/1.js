// The result of the following calculation is a string. Using type coercion,
// correct the calculation to produce the numeric result instead.

let x = '13';
let y = 9;

// console.log(x + y);
console.log(+x + 9);

// Using the same block of JavaScript, change the addition operator to a
// multiplication operator and leave x as a string. Will the result be a string or
// a number?

// Will return 117, a number
console.log(x * 9);

// Convert the three parts of this telephone number to strings to produce a valid
// phone number.

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + String(nxx) + String(num));

// You can also use the String constructor to create Strings from numbers. This is
// a function that takes an argument and converts it to a string. Try it using the
// previous block of code; wrap each number in a call to String.

// That's how I answered the previous question

// The toString method is yet another way to convert values to strings. Try using
// toString to convert a boolean and an array to a String. Did you get the result
// you expected?

let bool = true;
let arr = [1, 2, 3];

bool = bool.toString();
arr = arr.toString();
