/*
For boolean values, the || operator returns true if either or both of its
operands are true, false if both operands are false. The && operator, on the
other hand, returns true if both of its operands are true, and false if either
operand is false. This works great until you need only one of two conditions to
be true, the so-called "exclusive or", or XOR.

Write a function named isXor that takes two arguments, and returns true if
exactly one argument is truthy, false otherwise. Your function should work with
the boolean values of true and false, but also any JavaScript values based on
their "truthiness".

input: two arguments
output: boolean evaulating whether a single one of those items is truthy

algorithm:
  1. init counter = 0
  2. if cond1 is true, increment counter
  3. if cond2 is true, increment counter
  4. check if counter == 1, true if so, false if not
*/

const isXor = (cond1, cond2) => {
  let counter = 0;
  let conditions = [cond1, cond2];

  for (let index = 0; index < conditions.length; index += 1) {
    if (conditions[index]) {
      counter += 1;
    }
  }

  console.log(counter === 1);
  return counter === 1;
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
