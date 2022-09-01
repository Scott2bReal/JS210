/*
A user wrote a function that takes an array as an argument and returns its
average. Given the code below, the user expects the average function to return
5. Is the user's expectation correct? Why or why not?
*/

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
//
// function average(array) {
//   let sum = 0;
//
//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }
//
//   return sum / array.length;
// }
//
// console.log(average(myArray));

/*
Original answer:
This will return NaN, because the property names -2 and -1 are coerced to
strings. This means that the function will attempt to add undefined to the
value referenced by the local variable sum, which means sum will then be
assigned to NaN.

It appears as if those property names are not coerced to strings, so the for
loop references actual values. The output of the function call is 10, because
all 4 5's are added to sum (sum === 20), but the length property of an array
only counts its elements.

To refactor the function to produce the expected result:
*/

function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));
