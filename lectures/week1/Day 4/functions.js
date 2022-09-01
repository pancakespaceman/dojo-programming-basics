// Reserved keywords of JS => let, var, function, if, for, else
let globalNumber = 100;

function addTwoNumbers( num1, num2 ){
    let sum = num1 + num2;
    return sum;
}

function multiplyTwoNumbers( num1, num2 ){
    let multiplication = num1 * num2;
    return multiplication;
}

// Following formula:  ( a + b ) * ( a + b )
function formula( a, b ){
    let resultOfAdding = addTwoNumbers( a, b );
    let resultOfMultiplying = multiplyTwoNumbers( resultOfAdding, resultOfAdding );
    return resultOfMultiplying;
}

let sum = addTwoNumbers( 10, 20 );
let multiply = multiplyTwoNumbers( 10, 20 );
console.log( sum, multiply );
console.log( formula( 10, 20 ) );