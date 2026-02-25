// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

  // TODO: Implement this function
function getAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}


// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

// Acute angle test
const acute1 = getAngleType(45);
assertEquals(acute1, "Acute angle");

const acute2 = getAngleType(1);
assertEquals(acute2, "Acute angle");

const acute3 = getAngleType(89.999);
assertEquals(acute3, "Acute angle");

// Right angle test
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Obtuse angle test
const obtuse1 = getAngleType(120);
assertEquals(obtuse1, "Obtuse angle");

const obtuse2 = getAngleType(179.999);
assertEquals(obtuse2, "Obtuse angle");

// Straight angle test
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Reflex angle test
const reflex1 = getAngleType(200);
assertEquals(reflex1, "Reflex angle");

const reflex2 = getAngleType(359.999);
assertEquals(reflex2, "Reflex angle");

// Invalid angle test
const invalid1 = getAngleType(0);
assertEquals(invalid1, "Invalid angle");

const invalid2 = getAngleType(360);
assertEquals(invalid2, "Invalid angle");

const invalid3 = getAngleType(-10);
assertEquals(invalid3, "Invalid angle");

const invalid4 = getAngleType(400);
assertEquals(invalid4, "Invalid angle");


console.log("All tests executed.");

// Note: If no assertion errors are thrown, all tests have passed succesfully.
// i feel there is a better way or cleaner way to write the test, but for now, 
// this is a simple way to cover all cases.
