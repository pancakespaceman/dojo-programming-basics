// Functions

// Microwave we build it first, then we can use it
// Function has two parts - DEFINITION and the INVOACATION (function call)

// syntax of making a function in JS
// functionKeyword nameOfFunction() {code block}

function sayHello() {
  console.log("Hello there.")
  // I can put any code here. if statements, loops, call functions
}

function loginUser() {
  console.log("User is now logged in.")
}

// Invoke or call the function
// loginUser()


// Naming conventions
// camelCase
// function names should describe that the function does

// Parameters
// fancy word for a variable
// that holds the data passed or given to the function
// are defined in the parens when defining the function
function sayHello2(name) {
  console.log("Hello there", name)
}

// Argument
// the actual data that we give to the function
// this goes in between the parens when invoking the functio
// sayHello2("Dustin")
// sayHello2("Fernanda")
// sayHello2("Bryan")
// sayHello2("Zach")
// sayHello2("William")


// Return

function orderTacos(meatChoice, amount) {
  // var arr = ["You've ordered", "prepping", "here are your tacos"]
  console.log("You've ordered", amount, "tacos with", meatChoice);
  
  console.log("prepping your food.....")
  
  console.log("Here are your tacos.")
  return amount + " " + meatChoice + " tacos."
}

var myOrder = orderTacos("Carne Asada", 10)

console.log("I'm going to eat my order of", myOrder)

// var flooredNumber = Math.floor(2.5)
// console.log(flooredNumber + Math.ceil(3.1))

// console.log(console.log("I am inside another log!"))
