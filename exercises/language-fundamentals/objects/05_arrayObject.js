/*
What will the following code log to the console and why? Don't run the code
until after you have tried to answer.
*/

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

/*
This will log:
'a'
undefined
'd'
5
['a', 'b', 'c', 'f', '-1': 'd', 'e', 5]

Since arrays are objects, they can have properties like any other. Their
"elements" are referenced using 0 or positive integers. Therefore, the elements
are listed, along with the properties whose names are not positive integers or
0
*/
