// Arrays

// Data Structure
// Collection
// composite data type

// syntax of an array: denoted (surrounded by) square brackets
[] // this creates an empty array


var myArr = [] // assigning an empty array to the variable
var dogInfo = ["Vicky", 7, "brindle"]


// Access the data inside of an array?
// using index numbers
// arrays are zero indexed
// syntax: arr[index]


console.log(dogInfo[0])


// Add to an array?
// push function
// push adds a data to the end of the array

console.log(dogInfo)
dogInfo.push("Shawn")
console.log(dogInfo)
console.log(dogInfo.length)


// Remove from an array?
// pop function
// remove from the end of the array

dogInfo.pop()
dogInfo.pop()
dogInfo.pop()
console.log(dogInfo)


// Change things inside of the array

dogInfo[0] = "fred"
console.log(dogInfo)


// Length of an array
// we use the .length property

console.log(dogInfo.length)


// we can use the length to access the last thing in the array
dogInfo[dogInfo.length - 1]


var arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr[arr.length - 1])


// Will i always be able to see what's inside the array?
// no, many times we can't see whats inside of the array


// can we have an array inside an array
// if so, how do we access that array?

var a1 = ["Leia", 3, "red and white", ["ball", "treats", "bully the other dog"]]

console.log(a1)
console.log(a1[3])
// we just add another set of brackets and the index we want
console.log(a1[3][0])


// variable is NOT a piece of data
// varialbe contains data

// Array IS a piece of data
// array also contains other data