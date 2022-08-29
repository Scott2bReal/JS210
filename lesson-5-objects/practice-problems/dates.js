/*
1.
Create a variable named today with the current date and time as its value.
*/

const today = new Date();
console.log(today);

/*
2.
Log a string, "Today's day is 5", that tells the current day of the week as a
number between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to
obtain the number of the day of week.
*/

console.log(`Today's day is ${today.getDay()}`);

/*
3.
The getDay method, like many of the get methods on the date object, returns a
zero-based index of the current day of week instead of the day name. This
enables support for multiple locales and formats. Modify the output message of
the previous problem to show the 3-letter day name abbreviation. You may use
the following array:
*/

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's day is ${daysOfWeek[today.getDay()]}`);

/*
4.
Let's add the calendar date (the day of month) to our log message: "Today's
date is Mon, the 6th". Use the getDate method to obtain the current day of
month. Don't worry about using different suffixes for numbers that end with 1,
2, or 3 just yet; we'll deal with that in the next problem.
*/

let day = daysOfWeek[today.getDay()];
let month = today.getDate();
console.log(`Today's date is ${day}, the ${month}th`)

/*
5.
Ideally, the suffix on the day number needs to adjust to the proper suffix for
days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes
the day of month as a numeric value and returns the formatted day of month and
suffix. Make sure you use the correct suffixes.
*/
