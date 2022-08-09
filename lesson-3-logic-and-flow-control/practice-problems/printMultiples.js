/*
Write a function logMultiples that takes one argument number. It should log all
multiples of the argument between 0 and 100 (inclusive) that are also odd
numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

input: integer between 0 and 100
output: all odd multiples of that number between 0 and 100 (inclusive, descending)

algorithm:
  1. starting at 100, go down by one each time
  2. if result of counter % number is 0, and that result is odd, print

*/

const logMultiples = (number) => {
  for (let current = 100; current > 0; current -= 1) {
    if (current % number === 0) {
      if ((current / number) % 2 !== 0) {
        console.log(current);
      }
    }
  }
}

logMultiples(17);
logMultiples(21);
