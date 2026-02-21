//const movieLength = 8784; // length of movie in seconds

//const remainingSeconds = movieLength % 60;
//const totalMinutes = (movieLength - remainingSeconds) / 60;

//const remainingMinutes = totalMinutes % 60;
//const totalHours = (totalMinutes - remainingMinutes) / 60;

//const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
//console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declarations in this program. They are on lines 1, 3, 5, 7, 9 and 11. The variables being declared are movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result.



// b) How many function calls are there?

// There is 1 function calls in this program. It is on lines 10. The functions is the console.log().



// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// % is the remainder operator.
// movieLength % 60 - This gives the remainder when movieLength is divided by 60.
// Since there are 60 seconds in a minute, this tells us how many leftover seconds there are after counting full minutes.
// For example, 8784 % 60 = 24. So there are 24 seconds left after counting the minutes.



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// movieLength - remainingSecond - This gives the total number of seconds in the movie after removing the leftover seconds.
// Divide by 60 - this converst the seconds into total full minutes. eg. (8784 - 24) = 8760, 8760 / 60 = 146.



// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable result is a string that represents the movie length in hours:minutes:seconds
// For example: 2:26:24 (2 hours, 26 minutes, 24 seconds)
// Better name can be movieDurationString.



// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// This code will work for all positive integer values of movieLength. It will correctly calculate the hours, minutes and seconds for any length of movie. However, if movieLength is negative or not an integer, the code may not work as intended. For example, if movieLength is -100, the calculations will not make sense in the context of a movie length. If movieLength is a decimal, it may also cause issues with the calculations.

const movieLength = 65;

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const formattedHours = String(totalHours).padStart(2, "0");
const formattedMinutes = String(remainingMinutes).padStart(2, "0");
const formattedSeconds = String(remainingSeconds).padStart(2, "0");

const movieDurationString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

console.log(movieDurationString); // 00:01:05
