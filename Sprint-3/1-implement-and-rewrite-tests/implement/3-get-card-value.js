function getCardValue(card) {
  const rank = card.slice(0, -1); // everything except the last char (suit)
  const suit = card.slice(-1);     // last char (suit)
  const validSuits = ["♠","♥","♦","♣"];
  const validRanks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  if (!validRanks.includes(rank) || !validSuits.includes(suit)) {
    throw new Error("Invalid card");
  }

  if (rank === "A") return 11;
  if (["J","Q","K"].includes(rank)) return 10;
  return Number(rank);
}

module.exports = getCardValue;
