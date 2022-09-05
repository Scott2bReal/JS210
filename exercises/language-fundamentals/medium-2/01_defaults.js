/*
The processOrder function shown below accepts the following arguments: price,
quantity, discount, serviceCharge and tax. Any arguments other than price may
be omitted when calling the function, in which case, default values will be
assigned.
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));      // 126.5

/*
This function uses conditional statements to test whether arguments have been
omitted. When an argument is omitted, JavaScript automatically initializes it
to a value of undefined. The function takes advantage of this behavior by
setting undefined arguments to a default value.

The following variation of the processOrder function has the same behavior as
the first:
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/*
However, both of these solutions have a limitation that can lead to an
incorrect result for certain inputs. What is this limitation and how does it
affect the result?

If any of the arguments are provided as a string, then the function will return
a string due to implicit coercion

This is true, but the actual answer is that a value of 0 for all of the
optional arguments other than discount (its default value is already 0) will
result in an incorrect result. This is because 0 is a falsey value in
JavaScript, and will cause the default value to be assigned rather than using
the 0 which is actually intended
*/
