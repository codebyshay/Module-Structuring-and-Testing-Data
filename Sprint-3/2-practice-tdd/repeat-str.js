function repeatStr(str, count) {
  if (count < 0) throw new Error("Count must be a non-negative integer");
  return str.repeat(count);
}

module.exports = repeatStr;
