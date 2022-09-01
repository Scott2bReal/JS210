/*
Read through the code shown below. What does it log to the console at lines 6
and 10?
*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);       // [1, 2, 3]
console.log(myOtherArray);  // [1, 2, 3]

myArray = [1, 2];
console.log(myArray);       // [1, 2]
console.log(myOtherArray);  // [1, 2, 3]

/*
myArray and myOtherArray begin life with being assigned to the same array
object. When that object is mutated by pop(), referencing either of the
variables will return that same (mutated) array object. Then, myArray is
assigned to a different array object ([1, 2]), which decouples it from the
array object from before (now [1, 2, 3]).

This means that the last two lines of the program show different return values,
when at the beginning of the sequence the returns would suggest the call to
pop() affected both variables
*/
