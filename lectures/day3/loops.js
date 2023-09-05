// For loops

// for (loop variable; condition; increment/decrement) {
  // code block
  // our instructions go
// }
// i++ ->   i += 1 -> i = i + 1

for (var anyThingIWant = 0; anyThingIWant <= 6; anyThingIWant++) {
  console.log("The value of anything i want is:", anyThingIWant)
  // anyThingIWant++
}

console.log("After the loop")


// if (5 < 10){
  // console.log("this would run")
// }



for (var anotherVar = 10; anotherVar > 1; anotherVar--) {
  console.log(anotherVar)
}

var num1 = anotherVar

console.log("the value of num1 is", num1)




for (var i = 0; i < 10; i++) {
  // console.log("The value of i is:", i)
  i += 2;
}

console.log("We've reached the end! i is equal to,", i)

var numberToNotGoPast

for (var i = 0; i < 10; i++) {
  var isEven = false;

  if (i % 2 === 0) {
    isEven = true;
  }
  if (i == numberToNotGoPast) {
    // do something
  }

  // console.log("I is even:", isEven)
}

console.log(isEven)
