// Order of Operations
// PEMDAS - read left to right, 
// 1. Parenthesis
// 2. Exponets
// 3. Multiplication & Division - these are like operations so they are performed left to right
// 4. Addition & Subtraction - these are like operations

var num1 = 5;
var num2 = 7;
var num3 = 2;

// console.log(num1 / num2 * num3);
// console.log(num1 / (num2 * num3));

// Should I rely on PEMDAS? Should I write my math equations with PEMDAS in mind?
// No
// We want our equations to be explicit. We want to write them in a way that easyly dictates what operation is being performed

var num4 = (26 / 4) * 2;
var num5 = 26 / 4 * 2;


// Array
// composite data type, aka. collection, data structure
// arrays are made using square brackets
var arr1 = ["Shawn", "Converse", "sc@dojo.com"] 

// Accessing the data inside the array
// arrays are zero-indexed - each piece of data has a numerical index assigned to it starting at 0
// how would I get the first thing in my arr1 array
console.log(arr1[0])
console.log(arr1[1])

// change the values of differen indexes in an array
arr1[0] = "Tyler"
arr1[1] = "Thibault"
console.log(arr1[0])
console.log(arr1[1])

// Add values to the array?
// .push(someValue) - adds to the end of the array whatever is inside the parens
arr1.push(42)
console.log(arr1)

// Remove values from an array?
// .pop() - removes from the end of the array
arr1.pop()
arr1.pop()
// arr1.pop()
console.log(arr1)

// We can access the length of an array with the .legth property
console.log(arr1.length)