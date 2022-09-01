// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This will log 'This is global'. myVar is in scope of someFunction, as it is
// part of its execution context
