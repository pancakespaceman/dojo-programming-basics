// Functions

// Making a function always has two steps

// Step #1 - Define the function
function nameOfFunction() {
    // Code block
    // can be 1 to 10000000 lines long
    // can have if statements, for loops, variables, functions
}

// function greet() {
//     console.log("Hello there")
// }

// Step #2 - Call (invoke) the function
// writing the name of the function followed by open/close parans
// when a function runs, it runs ALL the code in the code block

// greet()


// Parameters
// A Parameter is just a variable
// we can call it whatever we want
// its job is just to hold data
// normal variables we define using the var keyword --  var num = 5
// parameters we
    // - we do not use the assignment operator
    // - are defined in the parens of a function definition

function greet(name) {
    console.log("Hello", name)
}


// When we invoke the function, we can pass data in the parens to the parameters
// this data is called an Argument
// greet("Cory")
// greet("Aldrin")
// greet("Shawn")

var outsideVar = 5

function login(email, password) {
    var emailInDb = "sc@dojo.com"

    if (email != emailInDb) {
        console.log("Wrong email")
    }

    var pwInDb = "password"
    if (password != pwInDb) {
        console.log("Wrong password")
    }

    console.log("You've logged in!")
}


// login("sc@dojo.com", "password")
// login("sr@dojo.com", "password")
// login("ac@dojo.com", "password123")



// Return vs Print(aka console.log())

function orderTacos(meatChoice, count) {
    var order = count + " " + meatChoice + " tacos"

    console.log("Your order is ready!")

    return order
}


// var myOrder = orderTacos("Al Pastor", 12)

// console.log("Time to eat my order of:", myOrder)

// var myOrder = orderTacos("Pollo", 2)

// console.log("Time to eat my order of:", myOrder)


function sortArray(arr) {
    // pretend i actually implemented a sortfunction

    return arr
}


// var sortedArr = sortArray([1, 5, 3, 2, 4])



function addTwoNums(a, b) {
    return a + b
}

var sum = addTwoNums(1, 3) - addTwoNums(5, 76)
console.log(sum)


var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);