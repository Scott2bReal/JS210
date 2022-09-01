// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This will log 'This is global', since myVar is declard without a keyword in
// someFunction. This creates property myVar of the global object with that
// string as its value
