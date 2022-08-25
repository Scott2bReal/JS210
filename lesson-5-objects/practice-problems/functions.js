/*
1.
What side effects are present in the foo function in the following code?
*/

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*
1. The array qux is mutated on line 1 of the function body
2. The popped value is logged to the console on line 2 of the function body
*/

/*
Which of the following functions are pure functions?
*/

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// Pure
function sum(a, b) {
  a + b;
}

// Pure
function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  return a + b + Math.random();
}

// Pure
function sum(a, b) {
  return 3.1415;
}
