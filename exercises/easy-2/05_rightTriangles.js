/*
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.
*/

const triangle = (rows) => {
  let row = '';
  let spaces = rows - 1;
  let stars = 1;

  while (spaces >= 0) {
    for (let index = 0; index < spaces; index++) {
      row += ' ';
    }

    for (let index = 0; index < stars; index++) {
      row += '*';
    }

    console.log(row);
    spaces -= 1;
    stars += 1;
    row = '';
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
