Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;


What effect does calling the `alert` function have?
// It pauses the webpage until you click OK.


Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
// const myName = prompt("What is your name?");
// Shows a pop-up asking: "What is your name?" and lets the user type a string.


What effect does calling the `prompt` function have?
// A dialog box pops up with the message you provide (in this case, "What is your name?").
// The webpage is paused while this dialog is open — you can’t interact with the page until you respond.

What is the return value of `prompt`?
// prompt returns the value that the user types if they click OK. eg. if the user types "Shay", the return value is "Shay" (a string) and if the user clicks cancel without typing anything, the return value is null.