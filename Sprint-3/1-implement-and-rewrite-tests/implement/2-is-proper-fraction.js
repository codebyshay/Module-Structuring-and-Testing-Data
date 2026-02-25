// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.
// A proper fraction means: The top number (numerator) is smaller than the bottom number (denominator).
// e.g. 1/2, 3/5. 5/2 would not be a proper fraction.
// Numerator < Denominator

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

  // TODO: Implement this function
function isProperFraction(numerator, denominator) {
  // A fraction cannot have denominator 0
  if (denominator === 0) {
    return false;
  }

  // A proper fraction means numerator is smaller than denominator
  if (numerator < denominator) {
    return true;
  } else {
    return false;
  }
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?
// I should test proper fractions, equal numbers, improper fractions, zero numerator, 
// zero denominator and negative numbers.

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 5), true);

// Equal numbers (not proper)
assertEquals(isProperFraction(4, 4), false);

// Improper fractions
assertEquals(isProperFraction(5, 2), false);
assertEquals(isProperFraction(10, 3), false);

// Zero numerator (0 is less than denominator)
assertEquals(isProperFraction(0, 5), true);

// Zero denominator (invalid fraction)
assertEquals(isProperFraction(5, 0), false);

// Negative numbers
assertEquals(isProperFraction(-1, 5), true);
assertEquals(isProperFraction(1, -5), false);

console.log("All tests executed.");
