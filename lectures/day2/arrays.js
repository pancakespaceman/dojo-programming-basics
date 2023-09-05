// Arrays
// composite data type
  // collection, data structure
  // allows us to store multiple pieces of data in one thing


// Syntax for an array:
  // denoted by square brackets []
  // data inside is separated by commas


var dogNames = ["Vicky", "Leia", "Shiro", "Izzy", "Stella", "Bear", "Toby", "Todd", "Hurley", "Soup"]
// strings in JS can be surrounded by single quotes (apostrophes) or double quotes
var arr2 = ['Vicky', 'Leia', 'Shiro', "Izzy's toy"]


// How do I access the data inside of an array
  // console.log(dogNames) // this prints the entire array

// access an item/element/value inside of an array by its index
// arrays are zero-indexed, the first thing in the array has index of 0
// syntax to access an array is the variable followed by square brackets with the index inside  ->   arrVariable[0]
// console.log(dogNames[0])

// We can change the elements inside of an array using the assignment operator (=)
dogNames[2] = "Something else"
// console.log(dogNames)


// Arrays in JS allow us to put ANYTHING inside
// generally the way we use arrays is a list of one data type
var twoDArray = [[1, 2, 3], [4, 5 ,6], [7, 8, 9]]

// how do I access the index of an array in an array

// console.log("The last value in the first array is:", twoDArray[0][2]) // this is how you should do it
// console.log(twoDArray[0, 2]) // this doesn't work

// Add/Remove from an array
// arrays CANNOT have an empty space
// .push(data) to add to an array at the end of an array
// .pop() removes from the end of an array, returns the value that was removed
// dogNames.pop()
// dogNames.pop()
// var removedValue = dogNames.pop()
// console.log(removedValue)
console.log("Adding this to the array:", dogNames.push("anotter name"))
console.log(dogNames)
console.log("The value that was removed is:", dogNames.pop())
console.log(dogNames)

// what happens if we access an index in an array that doesn't exist
// console.log(dogNames[-1])
// console.log(dogNames[1926])

// // access the length of the array
// // array.length
// console.log("The length of my dog array is:", dogNames.length)
// console.log("The value at the last index of the array is:", dogNames[dogNames.length - 1])



/**
 * multi
 * line
 * comment
 */