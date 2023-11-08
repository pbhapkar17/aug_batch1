// let/var/const vn =value 

//default var keyword

//scope level diff:
//let,const:block level scope , var : function level scope

var z = 90; //global variable

function test() {
  let a = 10;
  if (a < 20) {
    const b = 30;  //
    var c = 60;
    const d = 70
    console.log(b);

  }
  console.log(c);
  // console.log(d);
   //console.log(b);
  console.log('z', z);
}

console.log('z',z);
// console.log('c',c);
console.log(test());


//Redeclaration is not possible with let,const keyword
//Redeclaration is posible with var keyword
// const city = 'pune';
// const city = "mumbai";
// let city = 'pune';
// let city = "mumbai";

var city = 'pune';
var city = "mumbai";

//reassigning value to the variable is possiblw with let , var keyword but
//not possible with const keyword

let marks = 50;
marks = 60;

// const s = 60;
// s = 77

//hoisting : first define value to the variable then declare it;

//hoisting is possible using var keyword
//not possible with const , let keyword

 p = 50;
var p;

//defining value at a time of declaration is must with const keyword

let f;
f = 40;

var r ;
r = 67;

// const y ;
// y = 90;

const y = 90;


//function:parametrised,parameterless
//use : to implement logic
function multiplication(){
  //code block
  console.log('parameterless fun');
   let a = 20;
   let b = 30;
   res = a * b;
   console.log('res',res);
}

//argument/parameter
function division(a,b){
   res = a / b;
  console.log('parametrised fun',res);
}



