/*
Write a function that takes a string argument consisting of a first name, a
space, and a last name, and returns a new string consisting of the last name, a
comma, a space, and the first name.
*/

// Original Solution
// const swapName = (name) => {
//   return name.split(' ').reverse().join(', ');
// }

/*
Further Exploration:
What if the person had more than one first name? Refactor the current solution
so that it can accommodate this.
*/

// Further Exploration

const swapName = (name) => {
  let nameArray = name.split(' ');
  const lastName = nameArray.pop();

  return lastName + ', ' + nameArray.join(' ');
}

console.log(swapName('Joe Roberts'));       // "Roberts, Joe"
console.log(swapName('Mary Beth Roberts')); // "Roberts, Mary Beth"
