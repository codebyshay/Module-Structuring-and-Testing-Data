## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}


Try also entering `typeof console`
'object'


Answer the following questions:

What does `console` store?
console is a built-in object that stores methods (functions) to interact with the developer console. eg. console.log() - prints messages, console.warn() - prints warnings etc.


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log  a tool to write messages and console.assert checks if something is true.
The . is called the dot operator, without the dot, you can’t reach the tool inside the object. eg, the log, the assert.