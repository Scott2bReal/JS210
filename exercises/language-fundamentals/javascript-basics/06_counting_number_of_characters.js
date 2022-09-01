 // In this exercise, you will write a program that asks the user for a phrase,
 // then outputs the number of characters in that phrase. Go over the
 // documentation for String to find an appropriate method to use.

 let phrase = prompt("Please enter a phrase: ");
 const regex = /[^a-z]/ig

 console.log(`There are ${phrase.replace(regex, '').length} characters in "${phrase}"`)
