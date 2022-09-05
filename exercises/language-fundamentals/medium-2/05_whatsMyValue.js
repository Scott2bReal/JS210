/*
What will the following program log to the console? Can you explain why?
*/

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);               // logs 3
console.log(Object.keys(array).length);  // logs 4

array[-2] = 'Watermelon';
console.log(array.length);               // logs 3
console.log(Object.keys(array).length);  // logs 5

/*
This has to do with elements vs. properties of arrays in JavaScript. An array's
length property only takes into account the array's elements, while the
Object.keys().length() call will take into account all of the arrays
properties.
*/
