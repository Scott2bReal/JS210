/*
Build a program that logs when the user will retire and how many more years the
user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/
let readlineSync = require("readline-sync")

const retirement = () => {
  console.log("What is your age?")
  let currentAge = parseInt(readlineSync.prompt());
  console.log("At what age would you like to retire?")
  let retirementAge = parseInt(readlineSync.prompt());

  let currentYear = new Date().getFullYear()
  let timeLeft = retirementAge - currentAge;
  let retirementYear = currentYear + timeLeft;

  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
  console.log(`You have only ${timeLeft} years of work to go!`)
}

retirement();

/*
What would happen if the new keyword wasn't used in defining the today variable
on line 4?

According to the mdn docs, a string representation would be returned. This
means we wouldn't have access to methods like getFullYear()
*/
