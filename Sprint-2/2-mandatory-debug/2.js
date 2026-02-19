// Predict and explain first...

// Predict the output of the following code:
// Write your prediction here
// I think the output will be 'The last digit of 42 is 2', 'The last digit of 105 is 5', and 'The last digit of 806 is 6'.
// I think this will happen because the getLastDigit function is supposed to take a number, convert it to a string, and then return the last charecter of that string, which should be the last digit. 

//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// Write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// write your explanation here
// The output is 3 for all numbers because the function getLastDigit is not taking any parameters. It always uses the global variable `num` which is set to 103. So it always returns the last digit of 103, which is 3.

// Finally, correct the code to fix the problem
// Write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The function did not accept a parameter. It was a fixed variable (num = 103), so it always returned the last digit of 103.