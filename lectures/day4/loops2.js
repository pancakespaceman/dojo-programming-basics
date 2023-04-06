// Control Flow

// for (var i = 0; i < 9999999; i++) {
//   if (i > 5) {
//     break;
//   }
//   console.log('Order some donuts')
// }

// console.log('Ate all the donuts')


// while (true) {
//   console.log('I need a meteor')
// }


// JS undefined vs null

// undefined means that a variable or a function has been declared, meaning we wrote var something or
// function something() but they have no value
// we have a box but we never put anything it it 

var user1;

console.log(something())
console.log(user1)

function something() {
  console.log('I am inside the function')
  return undefined
}

// null is a data type that takes up space but represents nothing
// we have a box and we put a note inside that says "this is empty"
var user2;
console.log(user2)


// making a game
// i need to check which key the pressed
// WASD move characters just like arrow keys
// W == Up
// A == Left
// S == Down
// D == Right

// while (true) {
//   var keyPressed = 'esc'
  
//   if (keyPressed == 'up arrow' || keyPressed == 'w') {
//     // move up
//   } else if (keyPressed == 'down arrow' || keyPressed == 's') {
//     // move down
//   } else if (keyPressed == 'left arrow' || keyPressed == 'a') {
//     // move left
//   } else if (keyPressed == 'right arrow' || keyPressed == 'd') {
//     // move right
//   } else if (keyPressed == 'esc') {
//     console.log('quitting the game...')
//     break;
//   }

// }


var nums = []

for (var i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    nums.push(i)
  }
}

console.log(nums)


function foo() {
  return 5
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
  console.log('will this run')
}


function bar(a, b, c) {}

bar('this will go to a', 'this will go to b', 'this will go to c')