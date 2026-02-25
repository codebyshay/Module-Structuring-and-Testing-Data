// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is 0`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Zero numerator
test(`should return true when numerator is 0 and denominator positive`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Proper fractions (positive)
test(`should return true for proper positive fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 5)).toEqual(true);
});

// Improper fractions (positive)
test(`should return false for improper positive fractions`, () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false); // numerator = denominator
});

// Negative fractions
test(`should handle negative numerators`, () => {
  expect(isProperFraction(-1, 5)).toEqual(true);
});

test(`should handle negative denominators`, () => {
  expect(isProperFraction(1, -5)).toEqual(false);
});

test(`should handle both numerator and denominator negative`, () => {
  expect(isProperFraction(-2, -5)).toEqual(true);
});