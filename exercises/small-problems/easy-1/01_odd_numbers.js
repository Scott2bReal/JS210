/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.
*/

const oddNumbers = (end) => {
  for (let num = 1; num <= end; num += 2) {
    console.log(num);
  }
}

oddNumbers(99);
