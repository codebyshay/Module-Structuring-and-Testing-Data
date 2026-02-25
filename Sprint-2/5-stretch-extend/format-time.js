// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//function formatAs12HourClock(time) {
  //const hours = Number(time.slice(0, 2));
  //if (hours > 12) {
    //return `${hours - 12}:00 pm`;
  //}
  //return `${time} am`;
//}

//const currentOutput = formatAs12HourClock("08:00");
//const targetOutput = "08:00 am";
//console.assert(
  //currentOutput === targetOutput,
  //`current output: ${currentOutput}, target output: ${targetOutput}`
//);

//const currentOutput2 = formatAs12HourClock("23:00");
//const targetOutput2 = "11:00 pm";
//console.assert(
  //currentOutput2 === targetOutput2,
  //`current output: ${currentOutput2}, target output: ${targetOutput2}`
//);

// Bug 1: Minutes are hardcoded for PM. It always uses :00 for PM. If the input is "23:45", the output becomes "11:00 pm".
// Bug 2: AM hours are notconverted to 12 hour format. It works for "8:00" but "00:30" becomes "00:30" when it should be "12:30 am".
// Bug 3: 12PM and 12AM are not handled correctly. "12:00" becomes "12:00 am" whjen it should be "12:00 pm", and "00:00" becomes "00:00 am" when it should be "12:00 am".

function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(":");
  hours = Number(hours);
  let period = "am";

  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    period = "pm"; // noon
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  const paddedHours = hours.toString().padStart(2, "0");

  return `${paddedHours}:${minutes} ${period}`;
}

//testing the function with various inputs.
console.log(formatAs12HourClock("08:00")); // 08:00 am
console.log(formatAs12HourClock("23:00")); // 11:00 pm
console.log(formatAs12HourClock("00:30")); // 12:30 am
console.log(formatAs12HourClock("12:15")); // 12:15 pm
console.log(formatAs12HourClock("13:45")); // 01:45 pm
console.log(formatAs12HourClock("11:59")); // 11:59 am
console.log(formatAs12HourClock("12:00")); // 12:00 pm
