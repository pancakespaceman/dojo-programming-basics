
/*
    Relational operators
    < > <= >= === !== || && !
*/

let age = 19;
let graduated = true;
  
if ( age >= 21 ){
    if ( graduated === true ){
        console.log( "You are allowed to drink because you are graduated and you have at least 21 years." ); 
    }
    else{
        console.log( "You do have 21 years at least, but you are not graduated so you cannot drink yet." );
    }
}
else{
    if( graduated === true ){
        console.log( "Hey there graduate!" );
    }
    console.log( "You aren't allowed to drink yet!" ); 
}
