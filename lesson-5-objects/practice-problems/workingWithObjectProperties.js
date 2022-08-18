/*
1.
Write a function named objectHasProperty that takes two arguments: an Object
and a String. The function should return true if the Object contains a property
with the name given by the String, false otherwise.
*/

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

const objectHasProperty = (obj, prop) => {
  for (let pet in obj) {
    if (pet === prop) {
      return true;
    }
  }

  return false;
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

/*
2.
Write a function named incrementProperty that takes two arguments: an Object
and a String. If the Object contains a property with the specified name, the
function should increment the value of that property. If the property does not
exist, the function should add a new property with a value of 1. The function
should return the new value of the property.
*/

let wins = {
  steve: 3,
  susie: 4,
};

const incrementProperty = (obj, name) => {
  if (objectHasProperty(obj, name)) {
    obj[name] += 1;
  } else {
    obj[name] = 1;
  }
}

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

/*
3.
Write a function named copyProperties that takes two Objects as arguments. The
function should copy all properties from the first object to the second. The
function should return the number of properties copied.
*/

let hal = {
  model: 9000,
  enabled: true,
};
let sal = {};

const copyProperties = (obj1, obj2) => {
  let counter = 0;
  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    counter++;
  }

  return counter;
}

console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

/*
4.
Write a function named wordCount that takes a single String as an argument. The
function should return an Object that contains the counts of each word that
appears in the provided String. In the returned Object, you should use the
words as keys, and the counts as values.
*/

const wordCount = (string) => {
  let returnObj = {};
  let words = string.split(' ');

  words.forEach((word) => incrementProperty(returnObj, word));

  return returnObj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
