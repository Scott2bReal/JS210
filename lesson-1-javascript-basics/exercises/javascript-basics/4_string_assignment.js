// Take a look at the following code:

// let name = 'Bob';
// const saveName = name;
// name = 'Alice';
// console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before
// continuing.

// If you said that this code logged:
// Alice Bob

// you would be 100% correct, and the answer should come as no surprise. Now
// let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// The code logs "Bob Bob". This is because the return value of calling
// toUpperCase() on name is not stored anywhere. toUpperCase() returns a new
// string using the value in the argument passed to it, and does not modify the
// argument. In JavaScript, primitive strings are immutable.
