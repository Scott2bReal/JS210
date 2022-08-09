/*
Write a function that takes a number of rows as the argument nStars and logs a
square of numbers and asterisks. For example, if nStars is 7, log the following
pattern:
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

input: number of rows
output: above

algorithm:
  1. init counter 1
  2. init temp = 0
  2. start with empty string
  3. until temp = counter
    4. concat

*/

const generatePattern = (nRows) => {
  let counter = 1;
  let row;

  while (counter <= nRows) {
    row = ''

    for (let number = 1; number <= counter; number++) {
      row += String(number);
    }

    for (let starCounter = nRows - counter; starCounter > 0; starCounter--) {
      row += '*';
    }

    counter += 1;
    console.log(row);
  }
}

generatePattern(6);

/*
TODO

Have you tried supplying generatePattern with a number greater than 9? What did
you observe? Can you fix the current implementation so that it still renders as
a rectangle? Try it yourself before scrolling down.
*/
