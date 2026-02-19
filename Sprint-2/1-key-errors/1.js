// Predict and explain first...
// Why will an error occur when this program runs?
// I predict an error will occur when this program runs because the variable 'decimalNumber' is already declared inside the function 'convertToPercentage' and cannot be redeclared.

// Try playing computer with the example to work out what is going on
// When the 'function convertToPercentage(decimalNumber)' is created, Javascript already creates a variable called decimalNumber. then, inside the function, 'const decimalNumber = 0.5' tries to create another variable with the same name. This casues a syntax error because you cannot declare two variables with the same name in the same scope. 

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
