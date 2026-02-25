// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

// TODO: Implement this function
function getCardValue(card) {
   // Valid suits
  const validSuits = ["♠", "♥", "♦", "♣"];

  // Card must be at least 2 characters (e.g., "A♠")
  if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card");
  }

  // Suit is always the last character
  const suit = card.slice(-1);

  // Rank is everything except the last character
  const rank = card.slice(0, -1);

  // Validate suit
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card");
  }

  // Handle Ace
  if (rank === "A") {
    return 11;
  }

  // Handle face cards
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  // Handle number cards (2–10)
  const number = Number(rank);

  if (number >= 2 && number <= 10) {
    return number;
  }

  // If nothing matched → invalid
  throw new Error("Invalid card");

}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Test: Ace, face cards, number cards, invalid suit, invalid rank, completely invalid string.
// Examples:
// Number cards:
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("10♦"), 10);

// Face card:
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♠"), 10);

// Ace
assertEquals(getCardValue("A♥"), 11);

// Handling invalid cards
try {
  getCardValue("invalid");
 console.error("Error was not thrown for invalid string");
} catch (e) {}

// Invalid rank
try {
  getCardValue("1♠");
  console.error("Error wasnot thrown for invalid rank");
} catch (e) {}

// Invalid suit
try {
  getCardValue("A?");
  console.error("Error wasnot thrown for invalid suit");
} catch (e) {}

// Missing suit
try {
  getCardValue("A");
  console.error("Error wasnot thrown for missing suit");
} catch (e) {}

console.log("All tests executed.");


// What other invalid card cases can you think of?
// Test: Ace, face cards, number cards, invalid suit, invalid rank, completely invalid string.
