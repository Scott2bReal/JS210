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

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}th`)

/*
5.
Ideally, the suffix on the day number needs to adjust to the proper suffix for
days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes
the day of month as a numeric value and returns the formatted day of month and
suffix. Make sure you use the correct suffixes.
*/

const dateSuffix = (num) => {
  num = String(num);
  let lastIndex = num.length - 1;

  if (num[lastIndex - 1] === '1' && num[lastIndex] === '1') {
    return num + 'th';
  } else if (num[lastIndex - 1] === '1' && num[lastIndex] === '2') {
    return num + 'th';
  } else if (num[lastIndex - 1] === '1' && num[lastIndex] === '3') {
    return num + 'th';
  } else if (num[lastIndex] === '1') {
    return num + 'st';
  } else if (num[lastIndex] === '2') {
    return num + 'nd';
  } else if (num[lastIndex] === '3') {
    return num + 'rd';
  } else {
    return num + 'th';
  }
}

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}`);

/*
6.
Change your output to include the value from the getMonth method. Thus, the
logged string will read "Today's date is Mon, 11 6th", where 11 is the month
number returned by getMonth.
*/

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}`);

/*
7.
Let's make the month readable. Using the same technique we used in problem 3,
convert the month number in the output string to a 3-letter month name
abbreviation. You may use the following array:
*/

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}`);

/*
8.
Our call to console.log is getting cluttered. Let's clean things up a bit and
refactor the code into a few formatting functions that we can call from
anywhere in our code. Create formattedMonth and formattedDay functions to
format the month and day, then write a formattedDate function that pulls
everything together and logs the fully formatted date.
*/

const formattedMonth = (date) => {
  return months[date.getMonth()];
}

const formattedDay = (date) => {
  return daysOfWeek[date.getDay()];
}

const formattedDate = (date) => {
  const weekday = formattedDay(date);
  const month = formattedMonth(date);
  const day = dateSuffix(today.getDate());

  console.log(`Today's date is ${weekday}, ${month} ${day}`);
}

formattedDate(today);

/*
9.
Log the values returned from the getFullYear and getYear methods. Note how
these values differ. Note especially that getYear is deprecated: you should
avoid using deprecated methods as they may one day disappear.
*/

console.log(today.getFullYear());
console.log(today.getYear());

/*
10.
Use the getTime method and log the current date and time in total milliseconds
since Jan. 1st 1970.
*/

console.log(today.getTime());

/*
11.
Create a new date object variable named tomorrow that contains a Date object.
Initialize the variable by setting it to the value of today. You can get the
value of today using the getTime method. Next, change the date on the tomorrow
object to the day after today: you should use setDate to change the date.
Finally, log the tomorrow object with your formattedDate function.
*/

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow);
formattedDate(tomorrow);
