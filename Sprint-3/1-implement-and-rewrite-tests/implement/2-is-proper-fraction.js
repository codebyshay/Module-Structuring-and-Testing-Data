function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  return numerator < denominator;
}

module.exports = isProperFraction;
