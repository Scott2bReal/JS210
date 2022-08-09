/*
Write two functions that each take two strings as arguments. Their expected
behaviors are as follows:

    The indexOf function searches for the first instance of a substring in
    firstString that matches the string secondString, and returns the index of the
    character where that substring begins.

    The lastIndexOf function searches for the last instance of a substring in
    firstString that matches the string secondString, and returns the index of the
    character where that substring begins.

    Both functions return -1 if firstString does not contain the substring
    specified by secondString.

Examples:

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

input: full string, substring
output: index at which the substring starts, or -1

algorithm (indexOf):
  1. iterate thru firstString
  2. check if each character matches first character of secondString
    2a. save spot in first string for later return
  3. if it does, check next character of firstString with next character of secondString
  4. if at any point characters dont match, reset secondString index and continue where left off in firstString

algorithm (lastIndexOf):
  1. same as indexOf but go through both strings backwards?
*/

const indexOf = (firstString, secondString) => {
  let start = 0;

  for (let index = 0; index < firstString.length; index++) {
    if (firstString[index] === secondString[0]) {
      start = index;
      for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
        if (firstString[index + subIndex] !== secondString[subIndex]) {
          break;
        } else if (subIndex === secondString.length - 1) {
          console.log(start);
          return start
        }
      }
    }
  }
  console.log('-1');
  return -1;
}

const lastIndexOf = (firstString, secondString) => {
  let start;

  for (let index = firstString.length - 1; index >= 0; index--) {
    if (firstString[index] === secondString[-1]) {

      for (let subIndex = secondString.length - 1; subIndex <= 0; subIndex--) {
        if (firstString[index - subIndex] !== secondString[subIndex]) {
          break;
        } else if (subIndex == 0) {
          start = index;
          console.log(start);
          return start;
        }

      }
    }
  }
  console.log('-1');
  return -1;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1
indexOf('This contains This', 'This');             // 0

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
