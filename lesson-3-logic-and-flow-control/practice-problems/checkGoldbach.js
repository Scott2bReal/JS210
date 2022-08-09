/*
Write a function named checkGoldbach that uses Goldbach's Conjecture to log
every pair of primes that sum to the number supplied as an argument. The
conjecture states that "you can express every even integer greater than 2 as
the sum of two primes". The function takes as its only parameter, an integer
expectedSum, and logs all combinations of two prime numbers whose sum is
expectedSum. Log the prime pairs with the smaller number first. If expectedSum
is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you wrote for a
previous practice problem.

input: expectedSum
output: list of pairs which are both prime and equal expectedSum

algorithm:
  1. guard clause against expectedSum being odd or less than 4
  2. numOne = expectedSum - 3
  3. numTwo = 3
  4. if num one and two are both prime, sort and output
  5. numOne - 1, numTwo + 1
  5. keep going until numTwo > numOne

*/
const checkPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let counter = 2; counter < number; counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }

  return true;
}

const checkGoldbach = (expectedSum) => {
  if (expectedSum < 4 || expectedSum % 2 !== 0) {
    console.log("oops, null!");
    return null;
  }

  let numOne = expectedSum - 1;
  let numTwo = 1;

  while (numOne >= numTwo) {
    if (checkPrime(numOne) && checkPrime(numTwo)) {
      console.log(`${numTwo} + ${numOne} = ${expectedSum}, and are both prime!`)
    }

    numOne -= 1;
    numTwo += 1;
  }

  return null;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
