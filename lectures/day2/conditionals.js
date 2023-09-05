// What is a condition?
// expression -> code that evaluates to a value
// examples of expresions: 5 + 5; 7 * 12, console.log("string1" + "string2")
// var myVar = 5 + 5
// console.log(myVar)

// conditions are an expression that resolve to a boolean
// expression where we compare two things
// console.log(5 >= 5)
// var myVar2 = 42 > 57
// console.log(myVar2)

// Combining Conditions
// Logical operators AND and OR
// JS syntax is AND = && , OR = ||
// AND both conditions must be true for the overall value to evaluate to true
// OR only one condition must be true for the overall value to evalute to true
// at the end i get ONE piece of data, a boolean data type

// console.log(5 >= 5 && 2 < 6 && cond && cond && cond (cond || cond) )
// console.log(5 > 5 && 2 < 6)
// console.log(5 > 5 || 2 < 6)


// IF Statements

// var x = 25;

// if (x > 50) {    
//     console.log("bigger than 50");
// } 
// else {    
//   console.log("smaller than or equal to 50");
// }

// console.log("after the if statement")

// else if
// how we add multiple conditions to a single if statement
// for a if statement, only one code block will run
// you can have as many else if that you want
var x = 25;
if (x > 100) {    
    console.log("bigger than 100");
}
else if (x > 50) {    
    console.log("bigger than 50");
}
else if(x > 25) {
    console.log("bigger than 25");
}
else {    
    console.log("small number");
}


// I like to think of if statements as a question
// when should I use separete if statements as opposed a single if statement with else if
// it depends on how many questions/tasks we have

var weather = "rainy"

if (weather == "sunny") {
  console.log("Its nice outside")
} else if (weather == "rainy") {
  console.log("its a bit wet out there")
} else {
  console.log("what happen to the weather rock?")
}

if (weather == "rainy") {
  console.log("let me grab a jacket and an umbrella")
} 


// JS what is the difference between the == and the ===
// === works how other languages do comparisons
// == loose comparison -> compares only the values
// === strict comparison -> compares the value AND the data type

console.log(5 === "5")