/*
Build a program that randomly generates Teddy's age, and logs it to the
console. Have the age be a random number between 20 and 200 (inclusive).
*/

const generateAge = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)  + min);
}

console.log(generateAge(20, 200));

/*
There are 181 possible numbers.

Further Exploration:

The randomBetween function used the Math.floor() method. Would it make a
difference if the Math.round() method was used instead?

- This is detailed in the docs on Math.random(). Yes, it would make a
difference, since round will sometimes round up.

Also, how can we make the function more robust? What if the user inadvertently
gave the inputs in reverse order (i.e., the value passed to min was greater
than max)?

- We could make the function more robust by ensuring that min < max.
*/
