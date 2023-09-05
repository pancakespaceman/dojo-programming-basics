// // Loop Control Flow with break

// var length = 999999999;
// for (var i = 0; i < length; i++) {
//   if (i > 100) {
//     console.log("Stoping the loop");
//     break;
//   }
//   console.log("hello number:", i);
// }
// console.log("goodbye");

var arr = [
  3, 1, 0, 5, 3, 5, 1, 7, 9, 9, 2, 3, 5, 235, 235, 34, 34, 234, 23, 4, 234,
];
var searchValue = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === searchValue) {
    console.log("Search value found");
    break;
  }
  console.log(`Array value at index ${i} is: ${arr[i]}`);
}

for (var i = 0; i < 10; i++) {
  console.log(`Outer loop varible value: ${i}`);
  for (var j = 0; j < 10; j++) {
    console.log(`Inner loop varible value: ${j}`);
    break;
  }
  console.log("================================");
}

// == -> loose compare , compares values but not data types
console.log(5 == "5");
// === -> strict compare (this is how other languages treat their ==)
console.log(5 === "5");

var availableFood = "burger";

if (availableFood === "burrito") {
  console.log("Let me get the burrito.");
} else if (availableFood === "tacos") {
  console.log("Well then let me get some tacos");
} else {
  console.log("Guess im going hungry");
}

// loop through the array
// if the value is divible by 3, print Fizz
// if the value is divisble by 5, prin Buzz
// for the values divisible by 3 and 5, print FizzBuzz
// all other numbers print normally

function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (arr[i] % 5 === 0) {
      console.log("Buzz");
    } else if (arr[i] % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(arr[i]);
    }
  }
}

foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

function canUserLogin(username, password) {
  // we must first check if the username is correct
  // if true then check the password
  var canUserLogIn = false;
  if (username === "lord_farquad") {
    if (password === "shortandstout") {
      canUserLogIn = true;
    }
  }

  return canUserLogIn;
}

var loginResult = canUserLogin("LegoMan55123", "squareBlock!1");

if (loginResult == false) {
  console.log("You have logged in")
} else {
  console.log("YOU SHALL NOT PASS!!")
}

var var1 = 5 === 5

console.log(var1)