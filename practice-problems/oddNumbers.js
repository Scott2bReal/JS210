/*
Write a function that takes a positive integer as an argument, and logs all the
odd numbers from 1 to the passed in number (inclusive). All numbers should be
logged on separate lines.

Input: positive integer
output: all odd numbers between 1 and the argument

Data structure: array? just a for loop?

Algorithm:
  1. make a for loop starting at 1
  2. log i
  3. increment i by 2
  4. while i <= number
*/

const logOdds = (number) => {
  for ( let i = 1; i <= number; i += 2) {
    console.log(i);
  }
};

logOdds(19);
