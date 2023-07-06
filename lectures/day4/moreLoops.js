// Break statements


// var length = 999999999;
// for(var i=0; i<length; i++) {
//     console.log("hello number:", i);
// }
// console.log("goodbye");


// var length = 999999999;
// for(var i=0; i<length; i++) {
//     if(i > 10) {
//         break;
//     }
//     console.log("hello number:", i);
// }
// console.log("goodbye");


// Modulus practice

var length = 10
var countEven = 0

for (var i = 0; i < length; i++) {
  if (i % 2 == 0) {
    countEven++;
  }
}

console.log("The value of countEven is:", countEven)



// Function prediction

var name = "Debbie"
var name2 = "Bobby"

function greet(name) {
  console.log("The value of name in the function is: ", name)
  return "Hello there " + name + "."
}

var result = greet(name2) // a function is equal to its return aka a function call expression evaluates to its return
console.log(result)
console.log(name)





function turnOnAC(timeToWakeUp, timeToSleep, temperature) {
  for (var currTime = timeToWakeUp; currTime <= timeToSleep; currTime++) {
    if (currTime > 12 && temperature > 75) {
      console.log("Turn on the AC its too hot!")
      break;
    }
    console.log("The time is", currTime)
  }
}

turnOnAC(6, 22, 85)
turnOnAC(6, 22, 60)