/*
Write a function that takes a number argument, and returns true if the number
is prime, or false if it is not.

You may assume that the input is always a non-negative integer.

input: number
output: boolean (prime or not)

a number is prime if it is evenly divisible only by itself and 1

algorithm:
  1. start at number - 1
  2. if number % current === 0 return false
  3. decrement number down till 2
*/

const checkPrime = (number) => {
  if (number === 2) {
    console.log(`${number} is not prime`)
    return false;
  }

  for (let counter = 2; counter <= number / 2; counter += 1) {
    if (number % counter === 0) {
      console.log(`${number} is not prime`)
      return false;
    }
  }

  console.log(`${number} is prime!`)
  return true;
}

checkPrime(17);
checkPrime(50);
checkPrime(2);
