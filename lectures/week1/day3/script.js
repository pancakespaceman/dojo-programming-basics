// this is not a good way of repeating operations
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")
// console.log("hello there")

// for loops
// creating a variable, commonly referred to as the loop variable
// we write a condition. the condition determines if the loop runs. 
// if the condition is true, the loop runs. if it is false, the loop doesn't run
// increment/decrement step. we modify the loop variable so as to have it progress 
// to making the condition false
for (var num = 5; num >= 0; num--) {
  console.log("num is currently: " + num) // string concatenation. we add to strings together
}

for (var num = 10; num >= 0; num -= 2) {
  console.log("num is currently: " + num) // string concatenation. we add to strings together
}

for (var num = 2; num < 1000; num *= num) {
  console.log("num is currently: " + num) // string concatenation. we add to strings together
}

// while loops 
// the while loop only uses a condition
var thing = 20

while (thing > 5) {
 console.log("the value of thing is: " + thing);
 thing--;
}