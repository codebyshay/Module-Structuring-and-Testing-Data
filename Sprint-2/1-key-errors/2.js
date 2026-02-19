
// Predict and explain first BEFORE you run any code...
// This function should square any number but instead we're going to get an error

// Write your prediction of the error here:
// I predict that the error will be a syntax error because the parameter '3' is not a valid variable name.
// When you define a function,, the thing inside the parentahese must be a parameter name, NOT a number.

// function square(3) {
   // return num * num;
// }

// Write the error message here
// SyntaxError: Unexpected number

// Explain the error messge here:
// When defining a function, inside the parentheses, you need to put a parameter name, which is a variable.
// In this case, '3' is not a valid parameter name because it is a number, not a variable. 
// This causes a syntax error because Javascript expects a name, not a number.

// Finally, correct the code to fix the problem
// Write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));  // 9
console.log(square(5));  // 25



