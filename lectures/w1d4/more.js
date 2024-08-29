// For loops
// for (loop variable; condition; inc/dec) {}
// when we use a for loop, we know how many times we are looping



// While loops
// while (condition) {}
// we don't know how many times we need to loop
// instead we keep looping until a certain condition


// while (true) {
//     console.log("Hello there")
// }


// var num = 0
// while (num <= 5) {
//     console.log(num)
//     num += 2
// }



// Control flow for loops
// loops will run until the condition is false
// sometimes we want to stop a loop early
// we can use the break statement

// var num = 0
// while (true) {
//     console.log(num)
//     num++

//     if (num > 10) {
//         console.log("Loop is now breaking")
//         break;
//     }
// }


// while (true) {
//     var doesUserWantToQuit = true

//     if (doesUserWantToQuit) {
//         console.log("Exiting the game. Goodbye")
//         break
//     }
// }


// Basic 13

// Print 1-255
// Print all the integers from 1 to 255.

// function print1To255() {
//     for (var i = 1; i < 256; i++) {
//         console.log(i)
//     }
// }

// print1To255()



// Find and Print Max
// Given an array, find and print its largest element

function findMax(arr) {
    // var max = -Infinity
    var max = arr[0]

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return max
}

// console.log(findMax([1, 7, 8, 2, 3, 9, 4]))
console.log(findMax([-1, -7, -8, -2, -3, -9, -4]))




function doStuff() {
    // do this
    // do that

    // make a database call to get the most recent exam scores
    var scores = [8.0, 9.1, 10, 7.3, 8.2, 6.5, 9.7]

    var highestScore = findMax(scores)

    console.log(highestScore)
}

// doStuff()