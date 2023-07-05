// Functions

// Hard way
// var a = 5
// var b = 7
// var c = a + b
// console.log(c)


// var a = 2
// var b = 86
// var c = a + b
// console.log(c)

// var a = 75 
// var b = 16
// var c = a + b
// console.log(c)


// Better way

function addTwoNumbers(a, b) {
  var c = a + b
  console.log(c)
}


// addTwoNumbers(2, 86)
// addTwoNumbers(1, 56)
// addTwoNumbers(28, 9)


// 1. Defining a function
function greeting() {
  console.log("Hello there person.")
}

// 2. Call (aka invoke) the function - we press the start button
// greeting()
// greeting()
// greeting()
// greeting()
greeting()

// Naming conventions for functions
// camelCase, just like variables
// a function name should describe what the function does


// Parameters
// just variables that recieve the input data for our function
function greeting2(name) {
  console.log("Hello there " + name)
}

// Arguments
// are the data passed to the function (to the parameter)
greeting2("Nav")
greeting2("Ethan")



// Return

function orderTacos(meatChoice, amountOfTacos, money) {
  console.log("You've ordered", amountOfTacos, "tacos with the meat:", meatChoice);
  console.log("Making your order now");

  console.log("You're order is ready!")

  // we need to return an output to what called the function
  return amountOfTacos + " " + meatChoice + " tacos."
} 

var myTacoOrder = orderTacos("Al Pastor", 12, 24)


// console.log(myTacoOrder)
// console.log(orderTacos("Carne Asada", 10, 20))


// IN JS, all functions have a default return if we don't specify one
// they return undefined
function addThreeNumbers(a, b, c) {
  return a + b + c
}

var num1 = addThreeNumbers(4, 6, 2)
console.log("Here is the value in num1", num1)
var num2 = addThreeNumbers(num1, 82, 53)
var num3 = addThreeNumbers(num1, num2, 3)

console.log(num3)