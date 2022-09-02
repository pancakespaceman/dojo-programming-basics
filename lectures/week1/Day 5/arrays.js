

function printArray( list ){
    console.log( list );
    for( let i = 0; i < list.length; i ++ ){
        console.log( list[i] );
    }
}
let names = [ 'Alex', 'Roger', 'Mike' ];

//console.log( names[0] );
//console.log( names[2] );

// names[3] = 'Martha';

printArray( names );

names.push( 'Martha' );
names.push( 'Carol' );
names.push( 'Alan' );

printArray( names );

console.log( names );
names.pop();
console.log( names )

names.unshift( 'Alfredo' );
console.log( "After unshift", names );
names.shift();
console.log( "After shift", names );

printArray( names );


