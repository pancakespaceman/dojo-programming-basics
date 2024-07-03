// Functions

// #1 - Define the function
function countToFive() {
  for (var num = 1; num <= 5; num++) {
    console.log(num);
  }
}

// #2 - Call the function AKA Invoke the function
// countToFive()

// Naming conventions
// 1. camelCase (just like variables)
// 2. should describe the action they perform


// Parameter
// is just a variable
// holds the data passed to the function
// syntax: defined in the parens of a function definition

function greetPerson(name) {
  console.log("Hello,", name);
}

// when we call the function, we pass data to the parameters
// this data is called an argument
// parameter is the variable
// argument is the literal data passed to the function
// greetPerson("Shawn")
// greetPerson("David")
// greetPerson("Joe")
// greetPerson("Heidi")
// greetPerson("Spencer")


// Returns
// How a function outputs data (gives back data)
// the output data it placed where the function was invoked
// return ends the function
// return give back data (output)
// return to end the function early

function addTwoNums(a, b) {
  console.log("Adding your numbers...")
  return a + b
}

// addTwoNums(5, 17)

var num1 = 20;
var num2 = 34;
var num3 = addTwoNums(num1, num2)

console.log(num3)

console.log(addTwoNums(3, 75));




// example of a function without parameters
// function to get all the items in the database
function getAllItems() {
  // do the work of talking to the DB
  return DBInfo
}

// example of a function without a return
function deletItem(id) {
  // do the work of deleting the item in the DB
}


console.log(console.log())
