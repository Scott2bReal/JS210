// Identify the code that violates the Airbnb JavaScript style guide, and update
// the code to fix the issues you identify. There may be more than one issue in
// each code snippet.

// 1.
// let title = "The Three-Body Problem";

// Should be using single quotes for strings

// 2.
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;

// Should use one const or let per variable or assignment, and variable
// names should use camelCase

// 3.
let completed = lastPageRead == 400;

// Should use the === operator instead of the == operator.

// 4.

if (finishedBook())
  console.log('You have finished reading this book');

// Should use curly braces to define a block

// 5.
function read(pages) {
    console.log('You started reading.');
    for (let page=0; page<pages; page += 1) {
      let message = 'You read page '+page;
      console.log(message);
    }
}

read(400);

// Should be spaces surrounding operators
// Should be using 2 spaces to indent instead of 4
// Should prefer interpolation (using template strings) instead of concatenation
