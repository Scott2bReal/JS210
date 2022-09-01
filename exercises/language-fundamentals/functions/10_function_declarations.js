// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

// logValue();
//
// function logValue() {
//   console.log('Hello, world!');
// }

// This will print 'Hello, world!', as the function definition is hoisted above
// the actual invocation

// Let's refactor the code a bit. What does it log now? What is the hoisted
// equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// This will log String, since the function definiton will be hoisted above the
// variable declaration. The variable declaration will then override the
// function definition.
