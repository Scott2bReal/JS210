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
