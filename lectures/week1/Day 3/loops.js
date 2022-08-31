
// We want to print "Hello there" 10 times
                    //   counter < 11
                    //   counter <= 10
for( let counter = 1; counter < 11; counter ++ ){
    console.log( "Hello there", counter );
}

let counter = 1;
while( counter < 11 ){
    console.log( "Hello there", counter );
    counter ++;
}


// Arithmetic operators
/*
   () - priority operator
    * - multiply
    / - divide
    % - remainder of a division (modulus)
    + - add
    - - subtract
   ++ - adds 1 unit
   -- - subtracts 1 unit
   += - adds an amount on the right of the =
   -= - substracts an amount on the right of the =
   *=
   /=
   %=
    = - set a value to a variable  

    Order of operators
    ()
    * / %
    + -
    !
    < > <= >= === !==
    &&
    ||
    ++ -- += -= *= /* %=
    =


let result = (4 + 8) / 2 - 6 * ( 3 - 1 );
              12 / 2 - 6 * 2
              12 / 2 - 12
                6 - 12
                  -6
if ( 10 * 5 > 3 * 15 && true )
     50 > 45 && true
     true && true
        true

console.log( result );
*/

let result = (4 + 8) / 2 - 6 * ( 3 - 1 );

console.log( result );