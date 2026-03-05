// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: The code will not work because slice() is being used on cardNumber, which is a number.
// The slice() method only works on strings or arrays, not numbers.
// So I predict JavaScript will throw an error saying that slice is not a function for a number.

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// After running the code, I got the output "4213", which is the last 4 digits of the card number.
// This is what i expected.
//testing