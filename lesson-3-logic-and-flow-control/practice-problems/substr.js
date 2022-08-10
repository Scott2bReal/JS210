/*
Write a function that returns a substring of a string based on a starting index
and length.

    The start argument is the starting index. If negative, treat it as
strLength + start where strLength is the length of the string. For example, if
start is -3, treat it as strLength - 3.

    The length argument is the maximum length of the desired substring. If
length exceeds the number of characters available, just use the available
characters.

algorithm:
  1. establish full length of string, empty string for return
  2. determine start
    2a. if supplied start is negative, start = maxLength + start
  3. establish ending index
    3a. if length is 0 or negative, return empty string
  4. for loop thru string, adding each char to return string

*/

const substr = (string, start, length) =>  {
  let slice = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (let counter= 0; counter < length; counter++) {
    let index = counter + start;

    if (string[index] === undefined) {
      console.log(slice);
      return slice;
    }

    slice += string[index];
  }

  console.log(slice);
  return slice;
}

let string = 'hello world'; // length: 11

substr(string, 2, 4);      // "llo " -> starts at 2, ends at 5
substr(string, -3, 2);     // "rl"   -> starts at 8, ends at 9
substr(string, 8, 20);     // "rld"  -> starts at 8, ends at 10
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
