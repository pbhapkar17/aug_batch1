// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date


let state = "";  //empty string

let city = "pune"; //string data type

console.log('city 1',city);

city = 'mumbai';
console.log('city2',city);

var marks = 90; //number
console.log('marks', marks);

var mobNo =  "51561526"; //string 
console.log(mobNo);

// var mobNo =  51561526; //number 
// console.log(mobNo);

var isFavFruit = false; //boolean true/false
console.log(isFavFruit);

// var isFavFruit = 'false'; //string
// console.log(isFavFruit);

//typeof() >it gives type of variable
console.log('data type of isfavFruit var',typeof(city));


const match = undefined;
console.log(match);

let abc ;
console.log(abc);
console.log(typeof(abc));

var myName = null;
console.log(myName);
console.log(typeof(myName));  //null/array value typeof will return >> object 

let a = 999999999999999;
console.log(a);

// let b = 5.3646666  >> 5.36

let c = "9999999999999999";
console.log(BigInt(c));

let d = 9999999999999999n
console.log(d);

let k = null;

//array : is used to store multiple items
let name = "pooja live in mumbai, mumbai is big city" 
console.log(name);

let cities = []; //empty array

cities = ['pune','mumbai','nashik','satara','kolhapur','sangali'];
console.log(cities);
console.log(typeof(cities)); //array data type is always object
console.log(cities[4]); //kolhapur
console.log(cities[10]);//undefined
console.log(cities.length);
console.log(cities[0]); //pune
console.log(cities[cities.length - 1 ]); //sangli