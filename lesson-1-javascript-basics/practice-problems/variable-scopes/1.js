// Please predict the output of the following programs, and explain why they
// output what they do.

// 1
// let a = 'outer';
//
// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }
//
// console.log(a); // 'outer'
// testScope(a);   // 'inner'
// console.log(a); // 'outer'

// The variable a defined in the outer scope isn't affected by the variable a
// defined inside the function

// 2
// let a = 'outer';
//
// function testScope() {
//   a = 'inner';
//   console.log(a);
// }
//
// console.log(a);  // 'outer'
// testScope();     // 'inner'
// console.log(a);  // 'inner'

// the testScope function in this case reassigns the variable a to inner

// 3
// let basket = 'empty';
//
// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }
//
//   console.log(basket);
//
//   let shop2 = function() {
//     basket = 'computer';
//   }
//
//   const shop3 = () => {
//     let basket = 'play station';
//     cosole.log(basket);
//   }
//
//   shop1(); // reassigns basket to 'tv'
//   shop2(); // reassigns basket to 'computer'
//   shop3(); // creates new basket variable, assigns to 'play station'. logs this value
//
//   console.log(basket); // logs 'computer'
// }
//
// goShopping();

// 4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'
4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a); // 'hi'

// Because no keyword was used, JavaScript will create a new global variable a

// 5
// function hello() {
//   let a = 'hello';
// }
//
// hello();
// console.log(a); // ReferenceError: a is not defined

// 6
// console.log(a); // undefined
//
// var a = 1;

// var is used, so the declaration of a is hoisted

// 7
console.log(a); // ReferenceError: a is not defined

let a = 1;

// let is used, so a is left unset

// 8
console.log(a); // a is not defined

function hello() {
  a = 1;
}
