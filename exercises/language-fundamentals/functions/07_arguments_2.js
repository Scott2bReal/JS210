// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This will also log 7, since the a in the local scope of the definition of
// myValue is shadowing the variable a in the outer scope
