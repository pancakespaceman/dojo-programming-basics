// If statements
// if (condition) {}
// curly braces in JS are how we define code blocks
// all conditions must evaluate to a boolean, true or false
var temperature = 85;

// if (temperature > 75) {
//   console.log("Don't need a jacket.");
//   // millions of lines long
// }
// if the condition is false, we do not run the code block, we skip over it

// Else
// else is the code block that runs if the if condition is false
// with if statements, ONLY ONE CODE BLOCK RUNS
// if (temperature > 70) {
//   console.log("Don't need a jacket.");
// } else {
//   console.log("Make sure to grab your jacket.");
// }

// console.log("Shawn" == "shawn")

// Else If
// else if allows us to add more conditions to the if statement
// with if statements, ONLY ONE CODE BLOCK RUNS
// the conditions are checked from top down
temperature = 85 

if (temperature >= 80) {
  console.log("It's hot outside.");
} else if (temperature >= 70) {
  console.log("It's nice outside.")
} else if (temperature >= 60) {
  console.log("It's a bit chilly.")
} else {
  console.log("It's fairly cold out.")
}

if (temperature >= 80) {
  console.log("next if statement")
}


var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);