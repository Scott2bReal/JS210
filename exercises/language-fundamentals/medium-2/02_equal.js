/*
Read through the following code. Currently, it does not log the expected
result. Explain why this happens, then refactor the code so that it works as
expected.
*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
This returns false because the two objects, while sharing the same value for
their name property, are different objects. Two ways of refactoring to fix this:
*/

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);

// OR

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);
