// conditionals



// Conditions
// expression - something that evaluates to a piece of data

// math expressions
// example: 5 + 5, 10 - 2, 2 / 2, 3 * 8
// console.log(5 + 5)

var sum = 4 + 10

// console.log(sum)


// A condition is a logic expression
// booleans, true and false
// an expresion that evaluates to true or false

var myCond = 5 != 5

// console.log(myCond)

// console.log(10 > 5)


// Conditionals
// AKA if statements

// syntax
// if (condition) {}
// the curly braces denote a code block
// a code block can have any code inside of it
// a code block can have as much code inside of it
// the code block will run if the condition evaluates to true
// the entire code block will be skipped if the condition is false

// when we have else ifs and else statements as part of the if statement
// only ONE code block will run
// the first condition that is true (or the else)

// var age = 18

// if (age >= 30) {
//   console.log("Welcome to the library section");
// } else if (age >= 21) {
//   console.log("Welcome to the bar");
// }
// else {
//   console.log("You are not old enough to enter the bar");
// }

// if (true) {
//   console.log('true if statement')
// }

// var bool = false

// if (bool) {
//   console.log("bool is true");
// } else {
//   console.log("bool is false");
// }



// User login
// if (userEmail == dataBaseEmail) {

//   // ask for pasword
//   if (userPassword == dataBasePassword) {
//     console.log("successfully logged in")
//   } else {
//     console.log("Incorrect login credentials");
//   }
// } else {
//   console.log("Incorrect login credentials");
// }


// Logical Operators
// AND: &&
// OR: ||
// NOT: !
// allow us to combine conditions together into one bit condition

// Can i go for a walk?
// I don't want to go if its too cold or too hot

// Without logic operators
var temp = 90

// if (temp > 50) {
//   if (temp < 80) {
//     console.log("its the perfect temp for a walk")
//   }
// }


// With logic operators

// if (temp > 50 && temp < 80) {
//   console.log("its the perfect temp for a walk")
// }

// AND
// only evaluate to true if BOTH conditions are true
// console.log(temp > 50 && temp < 80)

// OR
// evaluate to true if ONE condition is true
// console.log(temp > 50 || temp < 80)


// NOT
// flips the boolean to the opposite
console.log(!false)


if (email != dbEmail) {
  console.log("invalid")
}
if (pw != dbPw) {
  console.log("invalid")
}
console.log("good to login")


if (userEmail == dataBaseEmail) {
  // ask for pasword
  if (userPassword == dataBasePassword) {
    console.log("successfully logged in")
  } else {
    console.log("Incorrect login credentials");
  }
} else {
  console.log("Incorrect login credentials");
}