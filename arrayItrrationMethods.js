const numbers = [45, 4, 9, 16, 25,67,88]; //9

//using simple loop
let num = [];
for(let i = 0 ; i < numbers.length ; i++){
     if(numbers[i] != 9 ){
        num.push(numbers[i])
     }
}
console.log(num);

//using forEach() array itr method  // break and contiue kaywords we cannot apply with forEach
let num2=[]
numbers.forEach(item => {
    if(item != 9){
         num2.push(item)
    }
})
console.log(num2);

//break/continue
 num = [];
for(let i = 0 ; i < numbers.length ; i++){
     num.push(numbers[i]);
     if(numbers[i] == 16 ){
        break;  //breaks out looping
     }  
    
}
console.log(num);

for(let i = 1 ; i <= 50 ; i++){
     if(i >= 31 && i <=40 ){
          console.log(i);
     }   
}

const item = [1,2,3,4,5,6,7,4,9,10];
item.forEach(ele=>{
     if(ele >=3 && ele <=9){
          document.write(ele,'<br>');
     }
})

item.push(44)
document.write(item)


// const n = [1,2,3,4,5,6,7,8,9,10]
// n=[20,55]
// console.log(n);

//find() it will return fist match that passess your test condition
let no = item.find(item=>{
    return item > 7;
})
console.log(no);  //9

//indexOf() : case sensitive //will return -1 if no match found
const fruits = ["Apple", "Orange", "Apple", "Mango","Orange"];
console.log(fruits.indexOf("Orange")); //1
console.log(fruits.indexOf("orange")); //-1

//lastIndexOf() case sensitive //will return -1 if no match found
console.log(fruits.lastIndexOf("Orange"));

//map()
emp = [
     {
          empName: "pooja", city: "pune"
     },
     {
          empName: "Pravin", city: "satara"
     },
     {
          empName: "Sagar", city: "Nashik"
     }
]

let names = emp.map(empData=>{
    return empData.empName;
})

console.log(names);