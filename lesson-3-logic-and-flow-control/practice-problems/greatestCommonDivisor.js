/*
Create a function that computes the Greatest Common Divisor of two positive
integers.

input: two positive integers
output: greatest common divisor of those two

algorithm:
  1. sort the two numbers in descending order
  2. if numOne % numTwo === 0 return numTwo
  3. loop
    4. subtract 1 from numTwo check if both divisible
    5. keep going till 1
*/

const sortTwoNums = (numOne, numTwo) => {
  if (numOne - numTwo >= 0) {
    return [numOne, numTwo];
  } else {
    return [numTwo, numOne];
  }
}

const greatestCommonDivisor = (numOne, numTwo) => {
  nums = sortTwoNums(numOne, numTwo);
  let divisor = nums[1];

  for ( ; divisor > 1; divisor -= 1) {
    if (nums[0] % divisor === 0 && nums[1] % divisor === 0) {
      console.log(divisor);
      return divisor;
    }
  }

  console.log(divisor);
  return divisor;
}

greatestCommonDivisor(12, 4);   // 4
greatestCommonDivisor(15, 10);  // 5
greatestCommonDivisor(9, 2);    // 1
