// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should return 0 when character does not occur in string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty String
// Given an empty string `str`,
// And any character `char`,
// When the function is called with these inputs,
// Then it should return 0, because no characters exist in the string.
test("should return 0 when string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Single Occurrence
// Given the input string `str`,
// And a character `char` that occurs exactly once within `str`.
// When the function is called with these inputs,
// Then it should return 1, indicating a single occurrence of `char`.
test("should return 1 when character occurs once", () => {
  const str = "hello";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

