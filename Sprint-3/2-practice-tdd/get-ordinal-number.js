function getOrdinalNumber(n) {
  const j = n % 10,
        k = n % 100;
  if (k >= 11 && k <= 13) return n + "th";
  if (j === 1) return n + "st";
  if (j === 2) return n + "nd";
  if (j === 3) return n + "rd";
  return n + "th";
}

module.exports = getOrdinalNumber;
