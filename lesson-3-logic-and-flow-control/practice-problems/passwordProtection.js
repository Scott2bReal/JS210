/*
Write a password guessing program that tracks how many times the user enters
the wrong password. If the user enters the password wrong three times, log 'You
have been denied access.' and terminate the program. If the password is
correct, log 'You have successfully logged in.' and end the program.

input: password attempt
output: reprompt, after 3 incorrect guesses, print "denied access"

algorithm:
  1. init password = password
  2. loop (do while, probably)
    3. prompt for password
    4. check against password
    5. if they got it, let them in
    6. if not, print denied access message
  7. after loop, print denied access message
*/

const makeCounter = () => {
  let counter = 0;

  return newCounter = () => {
    counter += 1;
    return counter;
  }
}

const passwordProgram = () => {
  const password = 'password';
  const maxAttempts = 3;

  let attemptCounter = makeCounter();
  let attempt = '';

  while (true) {
    attempt = prompt("Please enter the password");

    if (attempt === password) {
      alert("Welcome!");
      return;
    } else if (attemptCounter() < maxAttempts) {
      continue;
    } else {
      alert("You have been denied access");
      break;
    }
  }
}

passwordProgram();
