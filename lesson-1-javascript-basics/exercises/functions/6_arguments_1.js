// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This will log 7. The local variable b which is created is reassigned, which
// means it diverges from the variable a in the outer scope.
