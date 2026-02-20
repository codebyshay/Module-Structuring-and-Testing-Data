// In Sprint-1, there is a program written in interpret/to-pounds.js

// ORIGINAL CODE:
//const penceString = "399p";

//const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
//);

//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//const pounds = paddedPenceNumberString.substring(
 // 0,
 // paddedPenceNumberString.length - 2
//);

//const pence = paddedPenceNumberString
  //.substring(paddedPenceNumberString.length - 2)
  //.padEnd(2, "0");

//console.log(`£${pounds}.${pence}`);


// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs.
// For example:
// toPounds("399p") should return "£3.99"
// toPounds("45p") should return "£0.45"
// toPounds("9p") should return "£0.09"
// toPounds("1200p") should return "£12.00"

// The current code removes the "p", makes sur ethe number has at least 3 digits, splits pounds and pences and prints it in money format.
// Right now, it only works for "399p". I need it to work for "5p" and "1234p".
// I need to turn it into a function. eg. 'function toPounds(penceString)'. penceString clearly decribes what the input is.

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));  // £3.99
console.log(toPounds("45p"));   // £0.45
console.log(toPounds("9p"));    // £0.09
console.log(toPounds("1200p")); // £12.00

