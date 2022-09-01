/*
Write a function that will take a short line of text, and write it to the
console log within a box.

TODO further exploration
*/

const drawBorder = (length) => {
  let border = '+-';

  for (let index = 0; index < length; index++) {
    border += '-';
  }

  return border + '-+';
}

const drawPadding = (length) => {
  let padding = '| '

  for (let index = 0; index < length; index++) {
    padding += ' ';
  }

  return padding += ' |'
}

const drawMiddle = (string) => {
  let middle = '| '

  for (let index = 0; index < string.length; index++) {
    middle += string[index];
  }

  return middle + ' |'
}

const logInBox = (string) => {
  console.log(drawBorder(string.length));
  console.log(drawPadding(string.length));
  console.log(drawMiddle(string));
  console.log(drawPadding(string.length));
  console.log(drawBorder(string.length));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
