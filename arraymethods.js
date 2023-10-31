let city = ['pune','nashik','mumbai','jaipur',2000]; //hetrogenous array
console.log(city.length); //length opr will return length of an array

//toString()
console.log(city.toString());

//pop() // pops out/delete last item from array and will return the same
console.log(city);
let popedOutItem = city.pop();
console.log(popedOutItem);
console.log(city);


//push() to append/add items at the end of the array,will return length of the original array
let returnedByPush = city.push(6000,'poonam');
console.log(city);
console.log(returnedByPush);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
let color  = ['red','blue','black','yellow'];
let shiftMethodReturenedData = color.shift();
console.log(shiftMethodReturenedData);
console.log(color);

//unshift()
let color2  = ['pink','red','blue','black','yellow'];
let returnedData = color2.unshift('black','orange');
console.log(returnedData);
console.log(color2);

//join()
let v = ['pink','red','blue','black','yellow'];
let v1 = v.join(' ');
console.log(v1);

// let name = ["poonam", "patil"]
let name = ["04", "05" ,"1969"]
console.log(name);
let fName = name.join("/");
console.log(fName);


//concat()
cl2 = ['black','yellow'];
cl3  = [];
let cl4 = cl2.concat(cl3,v,"white") ;
console.log(cl4);

//delete
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(fruits);
console.log(fruits.length); //length remains same after deleting item

//
