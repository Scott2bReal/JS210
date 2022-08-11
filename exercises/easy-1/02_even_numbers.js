/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.
*/

const evenNumbers = (end) => {
  for (let num = 2; num <= end; num += 2) {
    console.log(num);
  }
}

evenNumbers(99);
