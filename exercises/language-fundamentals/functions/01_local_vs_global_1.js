// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// myVar will end up with a value of 'This is global'. The myVar declared in
// someFunction has a function declaration scope, and therefore does not affect
// the myVar with a global scope declared on line 1. Because the console.log
// call is in the global scope, that is the myVar which is logged.
