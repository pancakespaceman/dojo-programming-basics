// Week 2 Day 3
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


function evenOrOdd(numArr) {
  // I need two variables to track the number of evens or odds i've encountered

  // I need to loop through the array to look at every element
    // I need to check to see if the array element is even or odd and start counting by incrementing the counter
    // Also, if I find an even, then I should reset the odd counter and vice versa

    // If any of the counters equal to 3, then I have found 3 in a row
    // I need to console log the appropriate message
    // I need to reset the counter so I can start counting again from zero
}

// I need to make a function that has a parameter that recieves an array
function evenOrOdd(numArr) {
  // I need two variables to track the number of evens or odds i've encountered
  var evenCount = 0;
  var oddCount = 0;

  // I need to loop through the array to look at every element
  for (var i = 0; i < numArr.length; i++) {
    // I need to check to see if the array element is even or odd and start counting by incrementing the counter
    // Also, if I find an even, then I should reset the odd counter and vice versa
    if (numArr[i] % 2 === 0) {
      // if the number is even I increment evenCount and reset oddCount
      evenCount++;
      oddCount = 0;
    } else {
      // else the number must be odd so I increment oddCount and resetEvenCount
      oddCount++;
      evenCount = 0;
    }

    // If any of the counters equal to 3, then I have found 3 in a row
    // I need to console log the appropriate message
    // I need to reset the counter so I can start counting again from zero
    // this needs to be two if statements or an else if since I need to check both cases
    if (evenCount === 3) {
      console.log("Even more so!");
      evenCount = 0;
    }

    if (oddCount === 3) {
      console.log("That's odd!");
      oddCount = 0;
    }
  }
}