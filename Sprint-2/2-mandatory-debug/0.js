// Predict and explain first...write your prediction here
// I predict, when the code runs, it will print 320, but it will also print "The result of multiplying 10 and 32 is undefined".

//function multiply(a, b) {
//  console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Write your explanation here
// The function multiply(a, b) logs the result of a * b to the console but does not return a value.
// When multiply(10, 32) is called within the template literal, it logs 320 to the console but returns undefined.
// Therefore, inside the template literal, the value is undefined, which is why the final output becomes "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
// Write your new code here
// To fix the problem, the function should return the result instead of logging it.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

