// Loops


// For loops

// write the word for, then a set of open/close parens, then a set of open/close curly braces
// inside the parens:
// 1. Loop variable - knows what to act on / to know when to exit the loop
// 2. Condition - the loop will run if the condition is true
// 3. Increment/Decrement the loop variable - so the loop variable progresses to a point where the condition is false

// Order of operations for a for loop
// variable declaration is first
// then the condition check
// then the code in the code block (what is inside the curly braces)
// THEN the increment/decrement
// after that the loop returns to the condition
for (var num = 2; num < 5; num = num ** 45) {
  // console.log(num);
}

// console.log('The number outside of the loop', num)



// While loops
// starts with the word while
// then a set of open/close parens
// then a set of open/close curly braces
var num = 0
while (num < 10) {
  // console.log(num)
  num++
} 

// When should we use a for loop vs a while loop
// a for loop is when we know how many times we want to loop
  // examples: loop until a number is 10, or loop through an array or string
// a while loop is when we don't know how many times we want to loop


// How to loop through an array
// var favFoods = ['pho', 'tacos', 'pizza', 'fish', 'sushi', 'burgers', 'burritos', 'chicken adobo', 'baby back ribs'] 
var favFoods = []

for (var choice = 0; choice < favFoods.length; choice++) {
  console.log(favFoods[choice], 'is my favorite food!')
}

var fullName = 'Heidi Chen'
var newString = ''

for (var i = '0'; i < fullName.length; i++) {
  console.log(i)
  console.log(fullName[i]) // prints out the data then makes a new line below it
  newString += fullName[i]
}

console.log(newString)