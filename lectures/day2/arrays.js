// Arrays

var dog1Name = 'Teddy';
var dog1Age = 7;
var dog1HairColor = 'brown and white';
var dog2Name = 'Cedar';
var dog2Age = 5;
var dog2HairColor = 'golden';

// Arrays allow us to group related data with each other
// arrays are built using square brackets
// the data inside of arrays are called elements
// we separate elements using a comma

// In JavaScript, we can have different datatypes inside of arrays
var dog1 = [
  'Teddy',
  7,
  'brown and white',
  true,
  ['tennis ball', 'rubber bone'],
];
var dog2 = ['Cedar', 5, 'golden'];

// first step is accessing the value in the outer array, 
// then the second step is accessing the value of the inner array
// dog1[4][0] --> ['tennis ball', 'rubber bone'][0]
// console.log(dog1[4][0]); 
// console.log(dog2);


// How do I access the data inside of an array?
// By their index
// zero-index, meaning the first index is 0
// console.log(dog1[0])
// what index accesses the third thing in the array
// console.log(dog1[2])


// How do we add things and remove things from the array
// we can only add and remove from the end of the array
// push() function adds, pop() function removes
dog2.push('biscuit')
dog1.pop()
dog1.pop()

// how do we change a element in the array?
// access the element by its index and use the assignment operator (=)
dog2[0] = 'Leia'

// console.log(dog1)
// console.log(dog2)


dog3 = ['Buck', 4, 'chocolate']

console.log(dog3.length)
console.log(dog3[dog3.length - 1])
// dog3.pop()
// console.log(dog3.length)