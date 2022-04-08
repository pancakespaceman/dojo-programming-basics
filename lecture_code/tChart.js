var num1 = 20;
var num2 = 5;
if (num1 < num2) {
  num2 = num2 * num1;
} else {
  num1 = num1 / num2;
  if (num1 < num2) {
    num1 = num1 * 2;
  } else if (num1 == num2) {
    num2 = num1 * num2;
  } else {
    num2 = num2 * 2;
  }
}


var 7bar = 7 

console.log(num1);
console.log(num2);
console.log("Hello from a separate js file!");
console.log("I need to rewatch Star Wars again (not the sequals)")
console.log("This is a different change")


function greet(name) {
  console.log("Hello there " + name);

  return "Hello my friend"
}

greet("Andres")

// Logical operators

// AND operator
// OR operator
// NOT operator