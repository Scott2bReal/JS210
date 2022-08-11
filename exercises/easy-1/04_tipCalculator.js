/*
Create a simple tip calculator. The program should prompt for a bill amount and
a tip rate. The program must compute the tip, and then log both the tip and the
total amount of the bill to the console. You can ignore input validation and
assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const calculateTip = () => {
  readlineSync = require('readline-sync');

  console.log("What is the bill?");
  const bill = Number(readlineSync.prompt());
  console.log("What is the tip percentage?");
  const tipRate = Number(readlineSync.prompt());

  const tip = bill * (tipRate / 100.0);

  console.log(`The tip is ${tip}`)

  const total = bill + tip;
  console.log(`The total is ${total}`)
}

calculateTip();
