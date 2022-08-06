let incrementer = 1;
let start = incrementer;
let end;
let difference;

// In JavaScript, we can use a shorthand operator to add or subtract values to
// and from a variable. If we want to add one to our incrementer variable, we
// can write incrementer = incrementer + 1. However, JavaScript lets us shorten
// this with the self-addition operator, +=, e.g., incrementer += 1. (All we
// did was remove the second instance of incrementer, and then recombined the =
// and + as +=.) Analogous arithmetic assignment operators are available for
// the other basic arithmetic operations: subtraction, multiplication, and
// division.

// Increment the incrementer variable by 1 three times using the self-addition
// notation.

incrementer += 1;
incrementer += 1;
incrementer += 1;

// There's an even shorter way to increment and decrement a variable by one:
// the increment and decrement operators. To increment a variable by one, we
// write the variable name immediately followed by two plus signs, e.g.,
// incrementer++. We call this the postfix increment operator since it comes
// after the variable name.

// Increment the incrementer variable by 1 twice using the increment operator
// shorthand.

incrementer++;
incrementer++;

// Set the value of end to incrementer and the value of difference to end minus
// start. Log the value of end, which should be 6. Log the value of difference,
// which should be 5.

end = incrementer;
difference = end - start;

console.log(difference);

let answer = (11 + 31) * 3;
console.log(answer);
