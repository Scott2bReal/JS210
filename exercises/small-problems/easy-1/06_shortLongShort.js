/*
Write a function that takes two strings as arguments, determines the length of
the two strings, and then returns the result of concatenating the shorter
string, the longer string, and the shorter string once again. You may assume
that the strings are of different lengths.
*/

const shortLongShort = (stringOne, stringTwo) => {
  let strings;

  if (stringOne.length > stringTwo.length) {
    strings = { short: stringTwo, long: stringOne };
  } else {
    strings = { short: stringOne, long: stringTwo };
  }

  console.log((strings['short'] + strings['long']) + strings['short']);
  return (strings['short'] + strings['long'] + strings['short']);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
