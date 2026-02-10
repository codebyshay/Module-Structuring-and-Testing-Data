// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The error happens because cityOfBirth is used before it is defined. JavaScript runs code from top to bottom, so the variable must be declared first.