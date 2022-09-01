/*
In the following code, a user creates a person object literal and defines two
methods for returning the person's first and last names. What is the result
when the user tries out the code on the last line?
*/

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

/*
This will log the entire body of the object definition to the console This
happens because the () were not appended to the method calls. Referencing a
function without those parens returns the function itself, and doesn't actually
execute the function.
*/
