/*
Write a program to determine a student’s grade based on the average of three
scores you get from the user. Use these rules to compute the grade:

    If the average score is greater than or equal to 90 then the grade is 'A'
    If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
    If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
    If the average score is less than 50 then the grade is 'F'

You may assume that all input values are valid positive integers.

input: three grades (positive ints)
output: letter grade based on average score of those grades

algorithm:
  1. function that returns average of any number of ints
  2. average the scores given
  3. check that result against a conditional with those ranges
*/

const average = (array) => {
  let total = 0;

  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }

  return total / array.length;
}

const studentGrade = (scores) => {
  const grade = average(scores);

  if (grade >= 90) {
    console.log('Your grade is an A');
  } else if (grade >= 70) {
    console.log('Your grade is a B');
  } else if (grade >= 50) {
    console.log('Your grade is a C');
  } else {
    console.log('Your grade is an F');
  }
}

studentGrade([90, 50, 78]);
