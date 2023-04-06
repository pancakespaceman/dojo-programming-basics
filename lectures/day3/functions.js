// Functions!


// Naming Conventions for Functions
// Good name that describes what its going to do
// camelCase for the name of the function

function addTwoNumbers() {
  c = 5 + 5
  console.log(c)
}

// How do you call/invoke the function?
// addTwoNumbers()

// console.log(addTwoNumbers())


// magicalUnicorns
// String - with quotes
"magicalUnicorns"
'magicalUnicorns'

// Variable - there are no quote
var magicalUnicorns;

// Functions - we call functions with parens
function magicalUnicorns() {}

magicalUnicorns()

// Parameters are variables that hold the information passed to the function
function heatUpFood(food, time) {
  console.log('The food is:', food)
  console.log('The time is:', time)
}

// Arguments are the data that is passed to the function
// heatUpFood('Hot Pocket', 3)
// heatUpFood('popcorn', 2)
// heatUpFood('instant ramen', 4)

function logInUser(userInfo) {
  // do the work of logging in the user
}

// logInUser('Shawn')
// logInUser('Jim')
// logInUser('Tyler')


function displayItems(items) {
  for (var i = 0; i < items.length; i++) {
    console.log(items[i])
  }
}

// displayItems(['ball', 'bone', 'chewy'])
// displayItems(['March', 'January', 'July', 'December', 'October', 'September'])
// displayItems([])



// Returns

function orderTacos(order, money) {
  console.log('Your order is for:', order)
  console.log('It will cost:', money)

  console.log('Making your order........')

  console.log('Here is your order of', order)

  return 'Full Cooked: ' + order
}

function eat(food) {
  console.log('chomp chomp chomp')
  console.log('that was some yummy', food)
}

// var finishedOrder = orderTacos('12 Al Pastor tacos', 20)
// eat(finishedOrder)

// eat(orderTacos('24 Carnitas Tacos', 40))


console.log(console)


function foo(myArr) {
  
}