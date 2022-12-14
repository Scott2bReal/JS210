/*
The penultimate function takes a string as an argument and returns the
next-to-last word in the string. The function assumes that "words" are any
sequence of non-whitespace characters. The function also assumes that the input
string will always contain at least two words. The penultimate function in the
example below does not return the expected result. Run the code below, check
the current result, identify the problem, explain what the problem is, and
provide a working solution.
*/

// function penultimate(string) {
//   return string.split(' ')[-2];
// }


/*
This code logs undefined twice. The problem is that using negative indecies
does not work in JavaScript like in other languages (to reference array
elements from the back of the array). The undefined result comes from the fact
that there is no -2 property for the array.

In order to fix this, we need to determine the actual index of the penultimate
element of the array returned by calling split() on the string argument.
*/

function penultimate(string) {
  const penultimateIndex = string.split(' ').length - 2;

  return string.split(' ')[penultimateIndex];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
