// Array
// Composite data type (it is comprised of many other pieces of data)

// Syntax: array is denoted by square brackets
// The data inside of an array are called values/elements
var myArr = [1, 2, 3, 4, 5]

// console.log(myArr)

// Accessing an array
// access an array using an index value
// zero indexed
// first index is 0

var dogs = ["Vicky", "Leia", "Shiro", "Spot", "Soup", "Captain Reginald"]

// How would I access Vicky
// Syntax: varName[index]

// console.log(dogs[10])

// Add to the array
// push() - function
// add to the end of the array

// console.log(dogs)
// dogs.push("Bruce")
// console.log(dogs)

// Remove from the array
// pop() - function
// remove from the end of the array

// console.log(dogs)
// dogs.pop()
// console.log(dogs)


// Change the values inside of an array
// Access the array at a specific index and then use the
// assignment operator to change the value of that index
// dogs[3] = "Princess Buttercake"

// console.log(dogs)


// Length of the array
// Syntax: varName.length
console.log(dogs.length)

// How would I access the last index of the array?
// length of the array minus 1
console.log(dogs[dogs.length - 1])