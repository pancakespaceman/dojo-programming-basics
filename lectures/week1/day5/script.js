// Arrays
var breakfastChoice1 = "Omelette";
var breakfastChoice2 = "Chicken nuggets";
var breakfastChoice3 = "creme of wheat";
var breakfastChoice4 = "banana";
var breakfastChoice5 = "pancakes";
var breakfastChoice6 = "waffles";
var breakfastChoice7 = "french toast";

// Composite data type
// collection

var emptyArr = [];

var breakfastOptions = [
  "Omelette",
  "chicken nuggest",
  "creme of wheat",
  "banana",
  "pancakes",
  "waffles",
  "french toast",
];

var customer = ["Uchenna", breakfastOptions[5], 7, true, ["Naomi", "Noah"]];

console.log(customer[4][0]);

// Adding to and removing from arrays
// we can modify the data at any index

breakfastOptions[1] = "chicken nuggets";

// can only add or remove from the end of an array
// We add to arrays by using the push() function
breakfastOptions.push("chocolate cake");

console.log(breakfastOptions);

// we remove from arrays using the pop()
// the pop function removes from the end of the array and returns the value

var removedOption = breakfastOptions.pop();

console.log(breakfastOptions);
console.log(removedOption);

// we can access the length of the array
// array.length
console.log(breakfastOptions.length);

console.log(breakfastOptions[breakfastOptions.length - 1]);

// Swapping variables we use a temp variable
var a = 5;
var b = 7;
var temp = a;
a = b;

// We can also use destructuring to swap inline
// let c = 42
// let d = 67

// [d, c] = [c, d]
// // [a, b] = [b, a];
// console.log(c)
// console.log(d)
console.log("==================================================")
 
// Looping through array
// we often want to do some operation for everythign in an array
// i is short for index
for (var i = 0; i < breakfastOptions.length; i++) {
  console.log(i)
  console.log(breakfastOptions[i])
}

for (var i = breakfastOptions.length - 1; i >= 0; i--) {
  console.log(i)
  console.log(breakfastOptions[i])
}