// Function

// Function Keyword

// 1. defining (building) a function
function greetSomeone() {
  console.log("Good Morning Someone");
}

// 2. Call (invoke) the function
// greetSomeone();

function counter() {
  for (var num = 0; num <= 10; num++) {
    console.log(num);
  }
}

// counter(); // run the function
// counter(); // run the function again

function orderTacos(choice, meatChoice = "chicken", drinkChoice = "coke") {
  if (meatChoice != "nothing") {
    console.log(meatChoice)
  }
  console.log(drinkChoice)
  if (choice != "tacos") {
    return "We don't serve " + choice + ", only tacos"
  } else {
     var tacos = "Al Pastor Tacos"
  
    return tacos
  }
  // console.log(tacos) // this is like talking. important from time to time
} 

function eatTacos() {}

// var myTacos = orderTacos("tacos", "carne asada", "mexican coca cola")
var myBurrito = orderTacos("hot pocket5", "nothing", "horchata")

// console.log(myTacos)
console.log(myBurrito)

// the parameter is food, a variable to hold the data for the function
// this is the same as the plate that rotates inside of the microwave
function heatUpFood(food) {
   console.log("Heating up the food: " + food)

   var hotFood = "Hot " + food;

   return hotFood
}

// we need to put the food on the plate in the microwave
// passing data in the parens, called an argument
// var myPlate = heatUpFood("egg salad sandwich", 5) 
// console.log(myPlate)