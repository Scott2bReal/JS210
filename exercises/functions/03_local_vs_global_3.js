// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This will print 'This is local', since myVar is reassigned to that string in
// the definition of someFunction. When someFunction is called, myVar is
// reassigned.
