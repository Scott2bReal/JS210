/*
Write a function that takes a string consisting of one or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

1. Make an array of the words
2. Init counts object
3. Iterate through array
  4. If counts has property of word length to string, increment that by one
  5. If counts does not have that property, set it equal to one
6. Return counts object
*/

const wordSizes = (string) => {
  let counts = {};
  let words = string.split(' ');

  for (let index = 0; index < words.length; index++) {
    let wordLength = String(words[index].length);
    if (counts.hasOwnProperty(wordLength)) {
      counts[wordLength] += 1;
    } else {
      counts[wordLength] = 1;
    }
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
