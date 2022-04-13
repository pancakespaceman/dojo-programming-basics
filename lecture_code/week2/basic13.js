// ALL ALGORITHMS SHOULD BE WRITTEN AS FUNCTIONS

// 1. Print 1-255
// print1To255()
// Print all the integers from 1 to 255
function print1To255() {
  for (var i = 1; i < 256; i++) {
    console.log(i);
  }
}

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.
function printOdds1To255() {
  for (var i = 1; i < 256; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255() {
  for (var i = 1; i < 256; i++) {
    console.log(i);
  }
}


var numArr1 = [3, 4, 5, 6];
var numArr2 = [8, 3, 8, 9, 4, 1, 2, 10, 12, 7, 2];
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// PrintArrayVals(arr)
function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
function printMaxOfArray(arr) {
  var maxNum = arr[i];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  console.log(maxNum)
}


// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function printAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log("The average is:", sum / arr.length)
}


// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
