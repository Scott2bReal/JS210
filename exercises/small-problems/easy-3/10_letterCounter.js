/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.
*/

const wordSizes = (string) => {
  let counts = {};
  let words = string.split(' ');

  for (let index = 0; index < words.length; index++) {
    let word = words[index].split('').filter(char => /[A-Za-z]/.test(char)).join('');
    let wordLength = String(word.length);

    if (counts.hasOwnProperty(wordLength)) {
      counts[wordLength] += 1;
    } else if (wordLength === '0') {
      continue;
    } else {
      counts[wordLength] = 1;
    }
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
