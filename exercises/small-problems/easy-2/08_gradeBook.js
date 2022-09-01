/*
Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100.
*/

const average = (array) => {
  return array.reduce((a, b) => a + b) / array.length;
}

const getGrade = (gradeOne, gradeTwo, gradeThree) => {
  const grades = [gradeOne, gradeTwo, gradeThree];
  const averageGrade = average(grades);

  if (averageGrade <= 100 && averageGrade >= 90) {
    return 'A';
  } else if (averageGrade < 90 && averageGrade >= 80) {
    return 'B';
  } else if (averageGrade < 80 && averageGrade >=70) {
    return 'C';
  } else if (averageGrade < 70 && averageGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93) === "A");    // "A"
console.log(getGrade(50, 50, 95) === "D");    // "D"
