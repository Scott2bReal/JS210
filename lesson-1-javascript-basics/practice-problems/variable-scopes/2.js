// Please predict the output of the following programs, and explain why they
// output what they do.

// 1
// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }
//
//   console.log(a);
// }

// say(); // logs 'undefined' and not an error because var is used, giving the
       // variable a function scope

// 2
// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }
//
//   console.log(a);
// }

// say(); // ReferenceError: a is not defined because let

// 3
// function hello() {
//   a = 'hello';
//   console.log(a);
//
//   if (false) {
//     var a = 'hello again';
//   }
// }
//
// hello(); // hello
// console.log(a); // a is not defined

// 4
// function hello() {
//   a = 'hello';
//   console.log(a);
//
//   if (false) {
//     let a = 'hello again'
//   }
// }
//
// hello();        // hello
// console.log(a); // hello (a is globally scoped now)

// 5
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // 4: the declaration is hoisted to the top level, so a is
                // reassigned in the body of the loop

// 6
// let a = 'hello';
//
// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }
//
// console.log(a); // hello: the a variable declared within the loop has block scope

// 7
// let a = 1;
//
// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };
//
//   return bar();
// }
//
// console.log(foo()); // 4
// console.log(a);     // 3

// 8
// var a = 'global';
//
// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     }
//
//     return superNested();
//   }
//
//   return nested();
// }
//
// console.log(checkScope()); // superNested
// console.log(a);            // 'global'

// 9
// let a = 'outer';
// let b = 'outer';
//
// console.log(a);  // outer
// console.log(b);  // outer
// setScope(a);     // sets b to inner but doesn't touch a
// console.log(a);  // outer
// console.log(b);  // inner
//
// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// 10
// let total = 50;
// let increment = 15;
//
// function incrementBy(increment) {
//   total += increment;
// }
//
// console.log(total);     // 50
// incrementBy(10);        // no output
// console.log(total);     // 60
// console.log(increment); // 15

// 11
let a = 'outer';

console.log(a); // outer
setScope();     // Error
console.log(a);

var setScope = function () {
  a = 'inner';
};

// setScope gets declared but not assigned due to hoisting
