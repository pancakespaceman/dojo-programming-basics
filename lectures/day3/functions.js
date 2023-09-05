// Functions

// Naming conventions for functions
// camelCase just like variables
// should describe what the function is doing

function countToFive() {
  for (var num = 1; num <= 5; num++) {
    console.log(num);
  }
}
// countToFive(); // run the function / calling / invoking


// Parameter
// variable
// this variable is what holds the data given to the function
// parameters are declared in the parens of which defining the function

function countToNum(stopNum) {
  for (var num = 1; num <= stopNum; num++) {
    console.log(num);
  }
}  

// Argument
// actual piece of data that is passed to the function
// that goes inside the parens when invoking the function
// countToNum(10)
// console.log("============================")
// countToNum(20)

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function multArrayByTwo(arr){
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }

  console.log(arr)
}


// multArrayByTwo(arr1)
// multArrayByTwo([6, 2, 7, 9])


function orderTacos(meatChoice, amount) {
  // string interpolation
  // value of varibles directly into strings
  // backtics to do that ``
  // where we want our var data we write ${}
  console.log(`Thank you for your order of ${amount} tacos with ${meatChoice}!`)

  console.log('making your tacos.....')


  console.log('Here are you tacos!!')


  // How do we give back data to the function caller?
  // how do we give back output?
  return `Hot and delicious plate of tacos made with ${meatChoice}`
}


// var tacoPlate = orderTacos('Al Pastor', 12)

// console.log(`I am now eating my ${tacoPlate}!!`)

// orderTacos('Pollo', 10)
// orderTacos('Carne Asade', 133)

console.log(orderTacos('Carnitas', 20))


function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

function multEvenByTwo(arr){
  for (var i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      arr[i] *= 2;
    }
  }
  
  console.log(arr)
}


var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
multEvenByTwo(arr1)

function wordScramble(s) {
  // reverse the string
  return scrambleWord
}

var listOfWords = ['dog', 'house', 'computer', 'fire']
for (var i = 0; i < listOfWords.length; i++ ){
  var scrambledWord = wordScramble(listOfWords[i])

  // put scrambledWord on the browser
}




function getUserByUsernameInDB(username) {
  // querying the database with the username to get the user info

  var userInfo = [firstName, lastName, email, password]

  return userInfo
}


function displayUserIfno(username) {
  var userInfo = getUserByUsernameInDB(username)
  
  // displaying the info on the browser
}




var num1 = 55
var num2 = 20.34
var roundedNum2 = Math.floor(num2)
var num3 = num1 * Math.floor(num2)
var num4 = num3 * 2

console.log(num1 * Math.floor(num2))
console.log(num3 * 2)
