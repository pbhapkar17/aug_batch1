
// // // // for loop
// // // // for of loop
// // // // for in loop
// // // // do while loop

// // // // for loop
// // // for(let a = 1 ; a <= 10; a++){
// // //             console.log(a);}

// // // // for in loop
// // //             let student = {
// // //                 name:'pooja', 
// // //                 age : 20,
// // //                 city:'pune'}

// // //             for(let x in student){
// // //       console.log(student[x]);   //[]property access symbol [x]
// // //             }

// // //             //for of loop
// // // let color = ['red','orange','blue','purple','pink'];
// // // for(let item of color){
// // //    console.log(item);
// // // }

// // // //do while loop

// // // let a=0;
// // // do{
// // //     console.log(a);
// // //     a++
// // // }
// // // while(a<=5){

// // // }
 

// // // let person=
// // // {

// // // firstName:"Aashish",
// // // lastName:"patil",
// // // age:"24",
// // //   eyeColour:"Blue" 
    
// // // }
// // // document.getElementById ("demo").innerHTML=person.firstName +""+person.lastName


// //   function func(2,4);
// //   document.getElementById("demo").innerHTML=x;

// //   function Myfunction(a,b){

// //     return a*b;

// //   }
 

// let color =['pink','blue','yellow','red','green'];
// console.log(color.length);

// // var colorItems = color.pop();
// // console.log(color);

// let Coloradded =color.push('black','white','voilet');
// console.log(color);

// let shiftMethodReturenedData= color.shift();
// console.log(color);

// let unshift=color.unshift("purple");
// console.log(color);

let name =["pravin","pavan","onkar","sahil","ganesh"]
let name1=name.join("  ");
console.log(name);
console.log(name1);

let fName=["Aashish","patil"];

let joinName=fName.join("  ");
console.log(joinName);

let DOb=['11','10','2001']
let joinDOb = DOb.join("/");
console.log(joinDOb);

//Concat Method

let c1=['black','yellow','blue'    ];

let cl3=c1.concat('pink','orange','red');
console.log(cl3);

//DeleteMethod()

let D1=["Aashish","onkar","rohit","priya"];
delete D1[1];
console.log(D1);

//spliceMethod()

let d1=D1.splice(1,3,"arnav");
console.log(D1);