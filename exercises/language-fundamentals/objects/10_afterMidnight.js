/*
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative, the
time is before midnight.

The two functions below do the reverse of the previous exercise. They take a
24-hour time argument and return the number of minutes before or after
midnight, respectively. Both functions should return a value between 0 and 1439
(inclusive). Refactor the functions using the Date object.
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);
//
//   return hours * MINUTES_PER_HOUR + minutes;
// }
//
// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//
//   return deltaMinutes;
// }

const datePart = '01-01-2022'

function afterMidnight(timeStr) {
  let date = new Date(datePart + ' ' + timeStr);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return (hours * 60) + minutes;
}

function beforeMidnight(timeStr) {
  let final = 1440 - afterMidnight(timeStr);

  return final === 1440 ? 0 : final;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
