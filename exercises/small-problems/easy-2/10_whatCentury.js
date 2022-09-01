/*
Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with
'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.
*/

const ordinalize = (num) => {
  let ordinals = ['th', 'st', 'nd', 'rd'];
  let test = num % 100;

  return num + (ordinals[(test - 20) % 10] || ordinals[test] || ordinals[0]);
}

const century = (year) => {
  let cent = Math.ceil(year / 100);

  return ordinalize(cent);
}

console.log(century(2000) === "20th");       // "20th"
console.log(century(2001) === "21st");       // "21st"
console.log(century(1965) === "20th");       // "20th"
console.log(century(256) === "3rd");         // "3rd"
console.log(century(5) === "1st");           // "1st"
console.log(century(10103) === "102nd");     // "102nd"
console.log(century(1052) === "11th");       // "11th"
console.log(century(1127) === "12th");       // "12th"
console.log(century(11201) === "113th");     // "113th"
