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

 let [item1, item2, ...item3]= num ;
console.log(item1);
console.log(item2);
console.log(item3);
