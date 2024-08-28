// Remainder operator

// console.log(12 % 5)

// Loops

var num = 1
num++
num += 1
num = num + 1


// for (var anything = 0; anything > -10; anything++) {
//     console.log("Hello there", anything)
// }


// Looping through arrays

var dogNames = ["Vicky", "Leia", "Shiro", "Everest", "Asteroid Destroyer", "Max", "Megatron"] 

// for (var i = 0; i < dogNames.length; i++) {
//     console.log("i:", i, "name:", dogNames[i])
// } 

for (var i = dogNames.length - 1; i >= 0; i--) {
    console.log("i:", i, "name:", dogNames[i])
} 