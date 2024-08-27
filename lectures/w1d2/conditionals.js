// Conditions
// Conditions are expresions that evaluate to a boolean
// whenever we see an expression, it must evaluate right away

// console.log(5 > 6)


// var thing = 3 <= 4

// console.log(thing)

// Conditionals
// if statements
// syntax: if (condition) {code block}
// the code block will only run if the condition is true

if (false) {
    console.log("Hello there")
}


// else statement (cannot exist without an if)
// default, what will run if the condition is false

// var email = "s@dojo.com" // reality this comes from outside our code
// var emailInDatabase = "sc@dojo.com"

// if (email == emailInDatabase) {
//     console.log('log in the person')
// } else {
//     console.log('wrong email')
// }

// ONLY ONE CODE BLOCK WILL RUN


// Else if 
// sometimes we want to check multiple conditions 
// while only having one code block run

var availFood = "Bitter Melon"

// i wanna go order my favorite food at the restaurant

// if (availFood == "BBQ Chicken") {
//     console.log("Please let me get my favorite food!")
// } else if (availFood == "Burger") {
//     console.log("Well then let me get a burger please.")
// } else {
//     console.log("Guess i'll go somewhere else")
// }


// Logical operators
// combine different conditions

// AND - &&
    // true && true --> true
    // true && false --> false
    // false && true --> false
    // false && false --> false
    // both conditions must be true, for the final result to be true 
// OR - ||
    // true || true --> true
    // true || false --> true
    // false || true --> true
    // false || false --> false
    // only one condition must be true, for the final result to be true
// NOT - !
    // basically flips the boolean
    // !true --> false
    // !false --> true
    // !(5 == 5) --> false


console.log(5 == 5 || 6 != 6)
// true && true -> true