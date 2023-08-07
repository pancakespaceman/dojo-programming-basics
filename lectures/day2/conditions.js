// Conditionals

// if statement
// syntax:  if (condition) {}

console.log("This is before the if statement.")

// the curlybraces denote a code block, or the code to run if the condition is true
if (2 > 1) {
  console.log("Hello there.")
}

console.log("This is after the if statement.")


// Else

var isThereABanana = false

if (isThereABanana) {
  console.log("I'ma Eat the Banana.")
} 
else { // false case aka default
  console.log("I won't eat a banana.")
}




// Else if
// we can add more conditions to the if statement

var isThereABanana = true
var isThereAnApple = true

if (isThereABanana) {
  console.log("I'ma Eat the Banana.")
}
else if (isThereAnApple) {
  console.log("I'ma eat the apple.")
} 
else { // false case aka default
  console.log("I guess i'm not eating breakfast.")
}


if (isThereAnApple) {
  console.log("yippie there's an apple.")
}



var userEmailInput = "sc@dojo.com"
var dbEmail = "jr@dojo.com"

if (userEmailInput == dbEmail) {
  console.log("The user is able to log in.")
} else {
  console.log("The user entered the wrong email.")
}


// Expressions - it evaluates to something
// math equations are expressions -- 2 + 2, 6 / 3, 7 * 2, 8 - 4
// conditions are also expressions - they evaluate to true or false (boolean)
// 2 > 1 -> true,  7 < 3 -> false
 

var userAge = 21
// two if statements
if (userAge >= 18) {
  console.log("User can enter.")
}

if (userAge >= 21) {
  console.log("User drink.")
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