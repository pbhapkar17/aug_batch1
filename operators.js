// 
//= >>assigment operator --to assign value to the variable, 
//== >>Equality operator --to compare value of two varible, 
//===  >> Equality operator-- it will compare value as well as data type


let a = 40; //assigment operator's e.g.

let b = "30"

console.log( a == b); //only value
console.log( a === b); //it will strictly check value and DT.

let c = 20;
var d = 30;


console.log( c != d ); //true  // ! not operator !true >> false ; !false >>true
console.log( c == d);  //false

let isFav = true;
console.log(!isFav); //false

let e = 40;
let f = "50";

console.log(">", f > e); //false it will check only for values
console.log("<", e < f); //true

console.log("<=", e <= f)  //less than equal to operator

//&& AND : T && T --> T ,else F

console.log( e < f  && f == e );

// || OR F || F --> F , else T

console.log( e < f ||  f == e );
console.log( e < f ||  f == e  &&  a != b);

console.log( a !== b); //value and DT

let x = 20;
let y = 30;
let res = x + y;
console.log(res);