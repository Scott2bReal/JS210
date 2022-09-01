/*
1.
Write a function that takes two arguments, an array and an object. The array
will contain two or more elements that, when combined with spaces, produce a
person's full name. The object will contain two keys, title and occupation, and
suitable values for both items. Your function should log a greeting to the
console that uses the person's full name, and mentions the person's title and
occupation.
*/

const greetings = (nameArray, infoObject) => {
  let name = nameArray.join(' ');
  const title = infoObject['title'];
  const occupation = infoObject['occupation'];
  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

/*
2.
Implement a function that takes a String as an argument and returns an object
that contains a count of the repeated characters.

Note that repeatedCharacters does a bit more than simply count the frequency of
each character: it determines the counts, but only returns counts for
characters that have a count of 2 or more. It also ignores the case.
*/

const repeatedCharacters = (string) => {
  let repeatedChars = {};
  const testString = string.toLowerCase();

  for (let index = 0; index < testString.length; index++) {
    if (repeatedChars.hasOwnProperty(testString[index])) {
      repeatedChars[testString[index]] += 1;
    } else {
      repeatedChars[testString[index]] = 1;
    }
  }

  for (let char in repeatedChars) {
    if (repeatedChars[char] < 2) {
      delete repeatedChars[char];
    }
  }

  return repeatedChars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
