// Loops

// for (var i = 0; i < 10; i++) {
//   console.log("The value of i is:", i)
// }


// Looping through arrays

var dogNames = ["Vicky", "Leia", "Shiro", "Fido", "Spot", "Princess", "Megatron", "Fred", "Soup"]

// while did I choose to call the variable i?
// because i is short for index
// i < dogNames.length
for (var i = 0; i <= dogNames.length - 1; i++) {
  console.log(i)
  console.log("The name of the dog is:", dogNames[i])
}