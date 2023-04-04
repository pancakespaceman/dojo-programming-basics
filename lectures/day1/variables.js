// Variables
// an empty container

// How do you declare a variable
var theName = 'Carlie';

console.log(theName);
console.log('Here is my very fancy string.');

// How we use variables and how we name variables
// Variable names should describe the data that they contain
// ideally names should be fairly specific

var fullName = 'Joe Song';
console.log(fullName);
fullName = 'Thanh Lo';
console.log(fullName);

// Naming Conventions
// how to write the variables
// JS we use camelCase - the first word is lowercase and all the rest are capital case (the first letter)
var programmingBasicsStudent = 'Jojo';

var isThisAValidVaraibleName = 'Yes or no?';
console.log(isThisAValidVaraibleName);

var MAN_I_REALLY_LIKE_PANCAKES_AND_TACOS = 'heck yea';
console.log(MAN_I_REALLY_LIKE_PANCAKES_AND_TACOS);

var hajsodfhasdlfjhasldghasfhzxlkghjalseithgaxlkcghjaslghxzlkasjfgouasyhgljahsfgouahsfoguahfsgohaugharouhazslgjhasugahcxoghasogharouhzxgobuasdhgaousdhgazocxhoqawdsghasodghasouighasoihgoaishgaosehgaosgjas =
  'hahahahaahahaha';
console.log(
  hajsodfhasdlfjhasldghasfhzxlkghjalseithgaxlkcghjaslghxzlkasjfgouasyhgljahsfgouahsfoguahfsgohaugharouhazslgjhasugahcxoghasogharouhzxgobuasdhgaousdhgazocxhoqawdsghasodghasouighasoihgoaishgaosehgaosgjas
);

var variableNamesDoNotNeedToHaveAnyConventionTheyCanBeOneLongWordThing =
  'not good variable name';

// = is called the assignment operator, how we assign a value to a variable (put a thing in the box)
fullName = 'shawn converse';
fullName = 'jim reeder';
fullName = 'heidi chen';
fullName = 42;
console.log(fullName);

var answerToLifeUniverseAndEverything = 42;

var stringAnswer = '' + answerToLifeUniverseAndEverything;

// string interpolation
// put variable values inside a string
// JS we use back tics in stead of quotes and variables inside of ${}
var interpolatedString = `Here is my answer: ${answerToLifeUniverseAndEverything}`;
console.log(interpolatedString);
parseInt('42');

var newStudentFullName = fullName;
