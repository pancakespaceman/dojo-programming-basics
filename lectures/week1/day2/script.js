var currentBalance = 200
var withdrawAmount = 190
var warningAmount = 25
var endingBalance = currentBalance - withdrawAmount


if (endingBalance > warningAmount) {
  console.log("Successfully withdrew your money")
}  else if (endingBalance >= 0) {
  console.log("Successfully withdrew your money")
  console.log("Warning: you are low on funds")
} else { // the else is a default. It runs if all other conditions are false
  console.log("You're broke")
}

if (endingBalance < warningAmount) {
  console.log("tseting")
}

// USer wants to login

var emailInDB = "sc@dojo.com"
var userInput = "sc@dojo.com"

if (emailInDB == userInput) {
  console.log("You are able to log in")
} else {
  console.log("You are an unknown quantity. Please leave the premesis")
}

// Should I bring a jacket
var isCold = true

if (isCold) {
  console.log("Bring a jacket")
} else {
  console.log("but i like wearing jackets")
}

