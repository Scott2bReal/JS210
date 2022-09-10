/*
Write a program that solicits six numbers from the user and logs a message that
describes whether the sixth number appears among the first five numbers.
*/

// const checkNums = () => {
//   const readlineSync = require("readline-sync")
//
//   console.log("Enter the 1st number:")
//   let first = parseInt(readlineSync.prompt());
//   console.log("Enter the 2nd number:")
//   let second = parseInt(readlineSync.prompt());
//   console.log("Enter the 3rd number:")
//   let third = parseInt(readlineSync.prompt());
//   console.log("Enter the 4th number:")
//   let fourth = parseInt(readlineSync.prompt());
//   console.log("Enter the 5th number:")
//   let fifth = parseInt(readlineSync.prompt());
//   console.log("Enter the 6th number:")
//   let sixth = parseInt(readlineSync.prompt());
//
//   let nums = [first, second, third, fourth, fifth];
//
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === sixth) {
//       console.log(`The sixth number (${sixth}) appears in the first five ([${nums.join(', ')}])`);
//       return;
//     }
//   }
//
//   console.log(`The sixth number (${sixth}) does not appear in the first 5 ([${nums.join(', ')}])`)
// }
//
// checkNums();

/*
Further Exploration

What if the problem was looking for a number that satisfies some condition
(e.g., a number greater than 25), instead of a specific number? Would the
current solution still work? Why or why not?

It would be as simple as modifying the conditional statement in the for loop in
my solution. If I were to have used Array.prototype.includes(), then I would
have to implement this for loop solution

Explore the Array.prototype.some method, and see if you can change the possible
solution shown above to make use of that method instead.

Something like this could work with some() (checking if any element is > 25)
*/

const checkNums = () => {
  const readlineSync = require("readline-sync")

  console.log("Enter the 1st number:")
  let first = parseInt(readlineSync.prompt());
  console.log("Enter the 2nd number:")
  let second = parseInt(readlineSync.prompt());
  console.log("Enter the 3rd number:")
  let third = parseInt(readlineSync.prompt());
  console.log("Enter the 4th number:")
  let fourth = parseInt(readlineSync.prompt());
  console.log("Enter the 5th number:")
  let fifth = parseInt(readlineSync.prompt());
  console.log("Enter the 6th number:")
  let sixth = parseInt(readlineSync.prompt());

  let nums = [first, second, third, fourth, fifth, sixth];

  if (nums.some(element => element > 25)) {
    console.log(`Found numbers (${nums.filter(e => e > 25).join(', ')}) greater than 25!`);
    return;
  }

  console.log(`None of the numbers [${nums.join(', ')}] are greater than 25`)
}

checkNums();
