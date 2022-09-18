// You have written basic functions to display a random greeting to any number
// of friends upon each invocation of greet. Upon invoking the greet function,
// however, the output is not as expected. Figure out why not and fix the code.

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
    'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  // This line should have a return
  // words[idx];
  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    // This line is missing the (), and just returns the function
    // randomGreeting
    // const greeting = randomGreeting;
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
