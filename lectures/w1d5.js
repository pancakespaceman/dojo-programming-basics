// Break

// var nums = [2, 4, 5, 10, 7, 12, 9, 3, 1];
// var searchVal1 = 4;
// var searchVal2 = 1;
// var isVal1Found = false;
// var isVal2Found = false;

// for (var i = 0; i < nums.length; i++){
//   console.log("The value of i is: " + i + ". The value of nums[i] is: " + nums[i]);
//   if (nums[i] == searchVal1) {
//     console.log("found the search value1")
//     isVal1Found = true
//   }

//   if (nums[i] == searchVal2) {
//     console.log("found the search value2")
//     isVal2Found = true
//   }
// }

// if (isVal1Found && isVal2Found) {
//   console.log("Found both values")
// }

// for (var i = 0; i < nums.length; i++){
//   console.log("The value of i is: " + i + ". The value of nums[i] is: " + nums[i]);
//   if (nums[i] == searchVal) {
//     console.log("found the search value")
//     // since i have now found my search value
//     // end the loop
//     break;
//   }
// }

// String concatenation and string Interpolation
// concatenation is when we add strings together
// in JS will automatically change the data type of the value in variables to a string
// kindof cumbersome if i want to have multiple variables in my string

// string interpolation is a way to put the value of variables inside of a string
// syntax: surround the string with back ticks (not quotes)
// look at the number 1 on your keyboard, to the left is the back tick key
// syntax for putting a variable inside of the string: ${var}

// console.log("The value of i is: " + i + ". The value of nums[i] is: " + nums[i]);

// console.log(`The value of i is: ${i}. The value of nums[i] is: ${nums[i]}`);

// While Loops
// a for loop is useful when we know how many times want to loop
// sometimes though, we don't know how many times we want to run
// this is where a while loop is useful

// syntax: while (condition) {}

// var num = 1;
// while (num < 5) {
//   console.log("The number is", num);
//   num++;
// }

// var nums = [1, 3, 4, 5, 6, 9, 13, 18, 20];
// var i = 1;

// current value of i, add one to i
// grab the next index

// is the number at the next index one higher than the current index
//         4             4
// while (nums[i] + 1 == nums[i + 1]) {
//   console.log("good");
//   i++;
// }

// extension for formatting
// vscode has a built in formatter
// an extension for a formatter thats very popular is called prettier

//  group algo
// FizzBuzz
// has been used in junior interviews
// write code that will go through each number from 1 to 100
// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

function fizzbuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
