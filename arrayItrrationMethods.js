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
     if(numbers[i] == 16 ){
        break;  //breaks out looping
     }  
     num.push(numbers[i]);
}
console.log(num);