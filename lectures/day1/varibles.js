// Variables
// comments in code are text that is not read by the computer
// comments are a way to leave notes for ourselves and other devs in our code

// How do we make variables in JS
// varKeyword  nameOftheVariable equalSign  dataToPutInsideTheVariable
var firstName = "Carlos"
var lastName = "Gardea"

console.log("William")
console.log(firstName)

// Naming conventions
// variable names should describe the data they hold
// no spaces, camelCase - first word is lowercase, the following words are uppercase
// uniformity and ease of reading of code by humans
var firstAndLastName = "Shawn Converse"

// computer will run, but bad var name
var ldhfaousdfalsdandmsoahcxlbvzhfglasdflkvasxdcflkahsdlgfkajmsdxlkcfjhasldxkfchjzxasdfhgalsdhjgalkshgjalsdghjaosdjmnasdfhjaslkdjfhjadlxuivfhjzldeifhjaosdifyasdoigahsdoighasdoighasdlfvhajsdlfkhasdoighasodghaslekg = "hi"
console.log(ldhfaousdfalsdandmsoahcxlbvzhfglasdflkvasxdcflkahsdlgfkajmsdxlkcfjhasldxkfchjzxasdfhgalsdhjgalkshgjalsdghjaosdjmnasdfhjaslkdjfhjadlxuivfhjzldeifhjaosdifyasdoigahsdoighasdoighasdlfvhajsdlfkhasdoighasodghaslekg)


// Data types

// Strings - plain text alphanumeric and special character
// strings are made by surrounding text with a pair of single or double quotes (for JS)
"Hello there"
'General Kenobi'

var pizzaTopping = "Cheese"
console.log(pizzaTopping)


// Numbers
// In JS, this means both whole and decimal (float or double) numbers
// most languages specify between whole (integer) and decimal (float).
// some languages specify the memory size of the number (Java/C#)
6
2.5
console.log(42)
console.log(24 + 24)

var num1 = 87 - 25
console.log(num1)


// Boolean
// true or false
// computers ONLY understand binary - 0s and 1s. the voltage/electricty is on or off
var bool1 = true
console.log(bool1)

// Undefined vs Null

// Undefined (unique to JS) - is a data type that represents the idea that something has not been assigned
// empty box
var empty
console.log(empty)

// Null - is a data type where we expressly state that a value is empty
// putting an empty box inside of an empty box
var nullVar = null
console.log(nullVar)