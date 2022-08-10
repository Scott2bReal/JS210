/*
Implement a function that takes a string and a number times as arguments. The
function should return the string repeated times number of times. If times is
not a number, return undefined. If it is a negative number, return undefined
also. If times is 0, return an empty string. You may ignore the possibility
that times is a number that isn't an integer.

input: string, amount of times to mulitply
output: that string multipied the specified amount of times

algorithm:
  1. Guard clauses
  2. for loop, starting at 1 and concatenating empty string
*/

const repeat = (string, times) => {
  if (typeof(times) !== 'number' || times < 0) {
    console.log('undefined');
    return undefined;
  } else if (times === 0) {
    console.log('');
    return '';
  } else {
    finalString = '';
    for (let time = 0; time < times; time++) {
      finalString += string;
    }

    console.log(finalString);
    return finalString;
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
