// One of the ways to manage the flow of a program is through the use of
// conditionals. Go over the code below and specify how many unique execution
// paths are possible.

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}

// In the code above, there are the following possibilities:

/*

1. condition1 is false, and so are condition4 and condition5. No blocks are
   executed
2. condition1 is false, condition4 is true and condition5 is false. The block
   for condition4 is executed
3. condition1 is false, condition4 is true and condition5 is true. The blocks
   for condition4 and for condition5 are executed.
4. condition1 is true, condition2 is false. The block for condition1 is
   executed along with the else block following condition2.
5. condition1 is true, condition2 is also true. The block for condition1 is
   executed, as well as the block for condition2.

*/
