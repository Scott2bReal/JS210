/*
Identify the bug in the following code. Don't run the code until after you've
tried to answer.
*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

/*
When a is referenced there is no local variable named a, so this will throw an
error. The key a needs quotes around it.
*/
