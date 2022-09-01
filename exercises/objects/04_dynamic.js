/*
What will the following code log to the console and why? Don't run the code
until after you have tried to answer.
*/

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };
//
// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';
//
// console.log(myObject[prop2]);
// console.log(myObject.prop2);

/*
This will log:
678
456

When myObject is defined, it's property names are coerced to strings. Later,
when the local variable prop2 is created, the fact that it shares a name with
the property name prop2 is coincidental. In the log statements, the first one
is using bracket notation to reference the object property of the value
assigned to the prop2 local variable. In the second log call using dot
notation, prop2 is coerced to a string, so the myObject property value at
'prop2' is logged.
*/

/*
Further Exploration:
Here is another example. What do you think will be logged to the console this
time, and why?
*/

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/*
The myFunc function returns the string 'funcProp', so the funcProp property of
myObj will be modified
*/
