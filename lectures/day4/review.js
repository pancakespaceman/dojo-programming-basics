// Break statement

var length = 999999999;
for(var i=0; i<length; i++) {
  if (i > 20) {
    break;
  }
  console.log("Current i is:", i);
}
console.log("goodbye");


// Logical operators
// allows us to combine or manipulate conditions (true or false)
// && -- Logical AND --- combine two conditions. BOTH conditions must be true for the final result to be true
// || -- Logical OR --- combine two conditions. ONE condition must be true for the final result to be true
// ! -- Logical NOT --- manipulating a condition. reverse the result of a condition

var kidHeight = 42
var kidAge = 12
var kidName = "Jake"

// if (kidHeight >= 42) {
//   if (kidAge >= 10) {
//     console.log("You can ride the ride.")
//   }
// }

if (kidHeight >= 42 && kidAge >= 10 && kidName != "Jake") {
  console.log("You can ride the ride.")
}


console.log(!true)
console.log(5 != 7)




// Big Function Example

// Count the number of even numbers between two numbers and return it
function findNumberOfEvens(start, stop) {
  var countOfEvens = 0;
  
  for (var loopVar = start; loopVar < stop; loopVar++) {
    if (loopVar % 2 == 0) {
      countOfEvens++;
    }
  }

  return countOfEvens;
}

var myVar = findNumberOfEvens(0, 6)
console.log(myVar)
// console.log(findNumberOfEvens(10, 50))
// console.log(findNumberOfEvens(1, 10))

// console.log(findNumberOfEvens(0, 2000))

