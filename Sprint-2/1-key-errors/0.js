// Predict and explain first...
// I predict when this code runs, there will be a SyntaxError before the function executes. 
// This is because the identifier 'str' has already been declared.

// call the function capitalise with a string input
// capitalise("hello");


// interpret the error message and figure out why an error is occurring
// Uncaught SyntaxError: Unexpected identifier 'string' - this is the error message. 
// This error is occuring because the variable 'str' is being redeclared within the function, which is not allowed in JavaScript.
// The duplicate use if 'str' is causing the syntax error.


//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// The issue is variable redeclaration.
// str is the function parameter.
// let str tries to create a new variable with the same name.
// JavaScript does not allow redeclaring a variable in the same scope.
// As a result, the code throws a SyntaxError when it encounters the second 'str' declaration.

// New code without the error:


