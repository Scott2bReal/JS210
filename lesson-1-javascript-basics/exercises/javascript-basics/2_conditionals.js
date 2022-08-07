// Go over the following program. What does it log to the console at lines 7,
// 11, 15, and 19? Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log("Hello");
} // logs "Hello", as true is truthy

if (!myString) {
  console.log("World");
} // no log

if (!!myArray) {
  console.log("World");
} // logs "World", as myArray is truthy

if (myOtherString || myArray) {
  console.log("!");
} // logs "!", as at least one of these operands is truthy
