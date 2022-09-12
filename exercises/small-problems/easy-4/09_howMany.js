/*
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of
occurrences.
*/

const countOccurrences = (array) => {
  let counts = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (counts.hasOwnProperty(element)) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  }

  for (item in counts) {
    console.log(`${item} => ${counts[item]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
