function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));
//testing
//console.log(formatTimeDisplay(3661)); // 01:01:01
//console.log(formatTimeDisplay(45));   // 00:00:45
//console.log(formatTimeDisplay(3600)); // 01:00:00



// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// NOTES: 
// This code converst seconds into HH:MM:SS and it uses pad() to make sure every number has 2 digits. e.g. 1 = "01". 0 = "00".
// 


// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// pad will be called 3 times. pad(totalHours), pad(remainingMinutes) and pad(remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// num = 0

// c) What is the return value of pad is called for the first time?
// Return value = 00.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// num = 1 because 61 seconds has 1 second remaining after removing 1 minute (60 seconds).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// "01" because 1 is padded to 2 digits.
