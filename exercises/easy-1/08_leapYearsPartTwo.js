/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine leap years both before and after 1752.
*/

const isLeapYear = (year) => {
  if (!Number.isFinite(year) || year <= 0) {
    return;
  }

  if (year <= 1752 && year % 4 === 0) {
    return true;
  } else if (year <= 1752) {
    return false;
  }

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016) === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === true);      // true
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === true);       // true
console.log(isLeapYear(400) === true);       // true
