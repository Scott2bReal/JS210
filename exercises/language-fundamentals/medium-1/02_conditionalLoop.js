/*
The following program is expected to log each number between 0 and 9
(inclusive) that is a multiple of 3. Read through the code shown below. Will it
produce the expected result? Why or why not?
*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
It will not. First of all, it will log 0 because 0 % 3 evaluates to 0.
Secondly, it only increments the value if the value % 3 does not evaluate to 0,
so it will get stuck in an infinite loop
*/
