// Conditionals
// is a program's way of making a decision based on a boolean value

var condition = true;

// SYNTAX
// if (conditional expression) {code block}
if (condition) {
  // this is where the code block for the if statement goes
  // this code runs if the condition is true
}

// examples

var a = 9;
var b = 6;

if (a < b) {
  console.log("This is printed from inside the code block of the if statement");
} else {
  console.log("This is printed from inside the else statement");
}

// Order of Operations of an if statement
// we start with the if condition, and only move on to the next condition
// if the first was false

var changeAmount = 25;

if (changeAmount >= 25) {
  console.log("I have at least one quarter!");
} else if (changeAmount >= 10) {
  console.log("I have at least a dime");
} else {
  console.log("I dont't have any quarters or dimes");
}

// if there is only one line of code we wish to run, we don't need curly braces
// this does not work if we want an else if or else
if (changeAmount > 50) console.log("I half a half dollar!");

// var count = 0

// if (shawnAteTaco) {
//   count++;
// }


console.log(7 < 7)
console.log(7 + 7)
