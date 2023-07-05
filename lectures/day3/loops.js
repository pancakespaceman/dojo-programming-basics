// Operators


// Modulo (Modulus)
// Remainder division

// console.log(20 % 5) // 0 since 5 goes into 20 evenly
// console.log(21 % 5) // 5 goes into 20, and there is 1 left over
// even and odd
// console.log(28 % 2) // 0 since 28 is even
// console.log(27 % 2) // 1 since 2 goes into 26 , and there is 1 left over
// console.log(27 % 23) // 4


// Math library - rounding

// round() which rounds a decimal up or down depending on the value
// .5 and up rounds up and .49 and down rounds down
// console.log(Math.round(27.84))
// console.log(Math.round(436.2))

// floor() which always rounds down
// console.log(Math.floor(200.99))

// ceil() which always rounds up
// console.log(Math.ceil(150.01))

// trunc() which just cuts off the decimal
// console.log(Math.trunc(50.12935691273562195))


// Loops

// Loops are how we repeat a set of instructions (code) until we don't want to anymore
// a certain number of times, or until we finsh what do really

// For
// performing instructions a certain number of times

// Syntax (grammer)
// for (loop variable; condition; increment/decrement step) {code block. instructions that will run if the condition is true}
// for (starting point; stopping point; how large we step) {}
// loop variable: is used to keep track as we loop through the instructions (code)
// condition: the loop will run as long as the condition is true. if the condition is false, then the loop stops
// Increment/decrement: add or subtract from our loop variable. push the loop variable towards the condition becoming false
// code block can be any code. if statements, more loops, math, function calls
// code block can be a single line of code, or millions

// increment/decrement step happens after the code block runs
// after that we check the condition
// for (var num = 0; num <= 5; num++) {
//   console.log("Beginning of the code block.")
//   console.log("I really like pancakes.")
//   console.log(num);
//   console.log(num ** 45)
//   console.log("End of the code block.")
// }
// console.log("the loop has finished.")

// print out if a number is even or odd
// for (var num = 0; num <= 10; num++) {
//   if (num % 2 == 0) {
//     console.log("The number " + num + " is even.")
//   } else {
//     console.log("The number " + num + " is odd.")
//   }
// }


// infinite loop
// for (var num = 0; num < 10; num = num * 25) {
//   console.log("Loop de loop");
// }