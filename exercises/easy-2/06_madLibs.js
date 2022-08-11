/*
 Create a simple madlib program that prompts for a noun, a verb, an adverb, and
an adjective, and injects them into a story that you create.
*/

const madlib = () => {
  readlineSync = require('readline-sync');
  console.log("Enter a noun:");
  const noun = readlineSync.prompt();
  console.log("Enter a verb:");
  const verb = readlineSync.prompt();
  console.log("Enter a adverb:");
  const adverb = readlineSync.prompt();
  console.log("Enter a adjective:");
  const adjective = readlineSync.prompt();

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?`);
}

madlib();
