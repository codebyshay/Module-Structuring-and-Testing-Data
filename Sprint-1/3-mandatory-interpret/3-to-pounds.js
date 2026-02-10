const penceString = "399p";

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

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): creates a new string variable that contains the original string without the last character (the "p"). 
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): creates a new string variable that pads the previous string with leading zeros until it is at least 3 characters long. eg. "45" becomes "045" and "7" becomes "007".
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): creates a new string variable that contains the first part of the padded string, which represents the pounds. It takes all characters except the last two. eg. "045" becomes "0" and "399" becomes "3".
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): creates a new string variable that contains the last two characters of the padded string, which represents the pence. It also pads it with trailing zeros if necessary to ensure it is 2 characters long. eg. "045" becomes "45" and "7" becomes "70".
// 6. console.log(`£${pounds}.${pence}`): outputs the final price in pounds and pence format to the console. For example, if penceString is "399p", it will output "£3.99". If penceString is "45p", it will output "£0.45". If penceString is "7p", it will output "£0.07".
