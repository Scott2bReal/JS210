/*
Write a program that asks the user to enter an integer greater than 0, then
asks if the user wants to determine the sum or the product of all numbers
between 1 and the entered integer, inclusive.
*/

const sumOfCons = (num) => {
  if (num > 1) {
    return (num + sumOfCons(num - 1));
  } else {
    return 1;
  }
}

const productOfCons = (num) => {
  if (num > 1) {
    return (num * productOfCons(num - 1));
  } else {
    return 1;
  }
}

const sumOrProduct = () => {
  const readlineSync = require("readline-sync");
  let num;
  let action;

  while (true) {
    console.log('Please enter a number greater than 0:')
    num = Number(readlineSync.prompt());

    if (Number.isFinite(num)) {
      break;
    } else {
      console.log('I\'m sorry, that doesn\'t look like a number');
    }
  }

  while (true) {
    console.log('Enter "s" to compute the sum, or "p" to compute the product')
    action = readlineSync.prompt();

    if (action === 's' || action === 'p') {
      break;
    } else {
      console.log("I'm sorry, I don't know what to do with that");
    }
  }

  while (true) {
    if (action === 's') {
      console.log(`The sum of integers between 1 and ${num} is ${sumOfCons(num)}`);
      break;
    } else if (action === 'p') {
      console.log(`The product of integers between 1 and ${num} is ${productOfCons(num)}`);
      break;
    }
  }
}

sumOrProduct();
