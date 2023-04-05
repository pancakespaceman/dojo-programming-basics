// If Statements
// the way that we can make decisions based on a condition
// if states will run code if the condition is true
// the code is written inside of a set of opening/closing curly braces

var availableFood = 'tacos'
var availableMeat = 'pollo'
var isReady = true

// i like to think of if statements as questions
// a single if statement is a single question
// does the restaurant have tacos?
// well does it have pho?
if (availableFood == 'tacos') {
  console.log('Ill have 12 Al Pastor tacos.');
} else if (availableFood == 'pho') {
  console.log('I really love pho.')
} else {
  console.log('Just give me what you got chef.')
}

if (availableFood == 'tacos') {
  console.log('I am here inthe second if statement.')
}

// Logical Operators
// AND - && 
// OR - ||
// NOT - !
// if (availableFood == 'tacos') {
//   if (availableMeat == 'pollo') {
//     console.log('Please give me those tasty tacos.')
//   }
// }

// with AND, all conditions must be true
if (availableFood == 'tacos' && availableMeat == 'pollo' && isReady) {
     console.log('Please give me those tasty tacos.')
}

// with OR, only 1 has to be true
if (availableFood == 'tacos' || availableMeat == 'pollo' || isReady) {
     console.log('Please give me those tasty tacos.')
}

// isReady evaluates to true
// !isReady evaluates to false


console.log('==========================')
var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);
