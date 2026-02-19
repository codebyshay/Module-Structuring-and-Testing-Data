// Predict and explain first...write your prediction here
// I think the code will return undefined.

//function sum(a, b) {
 // return;
 // a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Write your explanation here
// When JavaScript sees the 'return' statement, it immediately stopd the function. It does NOT continue to the next line.
// So this part, 'a+b;' never runs. To return the sum of a and b, we need to put it on the same line as the return.
// Like the: 'return a + b;'

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
