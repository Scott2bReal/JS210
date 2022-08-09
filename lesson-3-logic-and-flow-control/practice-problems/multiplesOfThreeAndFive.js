/*
Write a function that logs the integers from 1 to 100 (inclusive) that are
multiples of either 3 or 5. If the number is divisible by both 3 and 5,
append an "!" to the number.

input: none
output: strings of numbers
*/

const fizzBuzz = () => {
  let counter = 1;

  while (counter <= 100) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log(String(counter) + '!');
    } else if (counter % 3 === 0 || counter % 5 === 0) {
      console.log(String(counter));
    }
    counter += 1;
  }
}

fizzBuzz();
