// EVENS AND ODDS!
 
// Create a function that accepts an array of numbers. Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
// in a row, print "Even more so!"
 
// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive
// even values, it should print the message two times.
 
// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!

// ------------------------------------
// [1,2,3,4,5,6,7,8]
// OUTPUT:
 
// ------------------------------------
// [2,2,1,1,6,6,5,5,5]
// OUTPUT:
// That's odd!
 
// ------------------------------------
// [1,1,1,3,3]
// OUTPUT:
// That's odd!


const arr1 = [1,3,5,8,8,8]
const arr2 = [1,2,3,4,5,6,7,8]
const arr3 = [2,2,1,1,6,6,5,5,5]
const arr4 = [1,1,1,3,3]


// psuedocoding is the process of writing out your steps in english

function evenAndOdds(numArr) {
  // SETUP
  var evenCount = 0
  var oddCount = 0
  
  // WORK
  for (var i = 0; i < numArr.length; i++) {
    console.log("The current number is: " + numArr[i])

    // is the number even or odd
    if (numArr[i] % 2 == 0) {
      // if even, increment the count of even nums, and reset odd count to zero
      evenCount++;
      oddCount = 0;
    } else {
      // if odd, increment the count of odd nums, and reset even count to zero
      oddCount++;
      evenCount = 0;
    }

    // Have we encountered 3 evens or odds in a row?
    // if we have, print the message, then reset the count
    if (evenCount == 3) {
      console.log("Even more so!")
      evenCount = 0;
    } else if (oddCount == 3) {
      console.log("That's odd!")
      oddCount = 0;
    }

    console.log("Even Count is: " + evenCount)
    console.log("Odd count is: " + oddCount)
  }

  // RETURN
}


// evenAndOdds(arr1)
evenAndOdds(arr2)
// evenAndOdds(arr3)
// evenAndOdds(arr4)


