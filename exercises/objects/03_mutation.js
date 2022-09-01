/*
What will the following code log to the console and why? Don't run the code
until after you have tried to answer.
*/

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/*
This will log the original names from array1 without any being uppercased. This
is because toUpperCase() returns a new string, so the actual object which was
pushed to array2 is never modified.
*/

/*
Further Exploration:
What would happen if an object literal was part of the array1 elements pushed
to array2? Would changes made to the object literal in array1 be reflected in
array2?

- The changes would be reflected as long as the object was being mutated.
Objects are mutable, unlike strings and other primitives in JavaScript

 How would you change the code so that any changes made to array1 in the second
for loop get reflected to array2?

- Instead of iterating through array1 and pushing elements to array2, I would
just created a shallow copy of array1 and assign array2 to that:

let array2 = array1;
*/
