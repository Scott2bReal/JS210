/*
Write a function that takes a string argument containing one or more words and
returns a new string containing the words from the string argument. All
five-or-more letter words should have their letters in reverse order. The
string argument will consist of only letters and spaces. Words will be
separated by a single space.
*/

const reverseWord = (word) => {
  return word.split('').reverse().join('');
}

const reverseWords = (string) => {
  let words = string.split(' ');
  let array = [];

  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (word.length < 5) {
      array.push(word);
    } else {
      array.push(reverseWord(word));
    }
  }

  return array.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
