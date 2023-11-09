//spread operator (...) :
//The JavaScript spread operator (...) allows us to
// quickly copy all or part of an existing array or object 
//into another array or object.

let num = [40,50,60,40,8,70];
//let num2 =[];

// num.forEach(ele=>{
//     num2.push(ele);
// })
// console.log(num2);

let num2 = [...num];
 console.log(num2);

 //part element copy 
 let [item1, item2, ...item3] = num ;
 //item1=40, item2=50,item3=60,40,8,70
console.log(item1);
console.log(item2);
console.log(item3);

//concatination of array
let color1 = ['red','orange'];
let color2 = ['violet','black'];

let color = [...color2, ...color1];
console.log(color);

//obj:
let emp = {
    name: "sushant",
    age: "25",
    city:"pune"
};

let emp3 = {...emp};
console.log(emp3);

let emp1 = {
    name: "sumit",
    age: "25",
    city:"pune",
    mob:9898989,
  
};
let emp2 = {
    name1: "pooja",
    age1: "25",
    city1:"pune",
    sal:30000
};

let emp4 = {...emp1, ...emp2}; //use spread op if keys are difeerent in both the obj,
console.log(emp4);  //dO not use sp for obj

//Object.assign(target, ...sources);
const mergedObj = Object.assign({},emp1, emp2);
console.log("mergedObj",mergedObj);

//ternory operator
let marks = 30;
if(marks > 35){
    console.log('pass');

}
else{
    console.log('fail');
}

//condition ? t>>statment1 : f>> statment2
marks > 35 ? console.log('pass') : console.log("fail");

//Arrow functions : allow us to write shorter function syntax:
 function test(){
   return 20*8;
}

console.log(test());

test1 = ()=> 20*8;
console.log(test1());