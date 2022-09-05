/*
What does the following code log? Why is this so?
*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// logs 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// logs 45

/*
This code logs those results because the startingBalance variable is available
to the totalPayable function as it is declared in an outer scope. This means
that startingBalance is a part of totalPayable's closure.
*/
