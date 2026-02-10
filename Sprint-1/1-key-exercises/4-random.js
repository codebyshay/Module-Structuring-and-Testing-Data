const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random returns a random number between 0 (inclusive) and 1 (exclusive).
// const minimum = 1; const maximum = 100; +1 so, 100 - 1 + 1 = 100
// Math.random() * 100 means the decimal number will be multiplied by 100, so the range of possible values is from 0 to 99.9999...
// Math.floor rounds the number down to the nearest whole number, so the possible values are from 0 to 99.
// Eg. 12.9 becomes 12, 0.3 becomes 0, 99.9 becomes 99.
// Brackets(), Multiply*, Function(Math.floor), Addition+
// 1) Pick a random number between 0 and 1, eg. 0.5
// 2) Multiply that number by 100, eg. 0.5 * 100 = 50
// 3) Round that number down to the nearest whole number, eg. Math.floor(50) = 50
// 4) Add 1 to that number, eg. 50 + 1 = 51

// num represents a random whole number between 1 and 100.