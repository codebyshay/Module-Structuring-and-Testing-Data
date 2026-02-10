let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are 5 function calls in this file. They are on lines 1, 2, 4, and 5. The functions being called are replaceAll() and Number(). 
// Line 4: replaceAll and Number (2)
// Line 5: replaceAll and Number (2)
// Line 10: console.log (1)



// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// The error is occuring on line 5. It is occuring because there is a missing comma between the replaceAll "".
// We can fix this by adding a comma between the two empty strings in the replaceAll function on line 5, like this: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  



// c) Identify all the lines that are variable reassignment statements

// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));



// d) Identify all the lines that are variable declarations

// Lines 1,2,7 and 8.
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// carPrice.replaceAll(",", "") - Replaces all commas "," in the string with nothing "". e.g "10,000" becomes "10000".
// Number() - Converts the resulting string "10000" into the number 10000.
// The purpose of this is to take a string with commas (like "10,000") and turn it into a number (10000) that we can do math with.