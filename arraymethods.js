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

//delete: undefined holes 
 //length remains same after deleting item
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
//delete fruits[10];
console.log('>>>',fruits);

//splice(index(where u want to add item), count(how many elements want to delete, elements to be added))
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
 //fruit1.splice(1,0,'kiwi');
 fruit1.splice(1,2,'kiwi');
console.log(fruit1);

const fruit2 = ["Banana", "Orange", "Apple", "Mango",'kiwi'];
let a = fruit2.slice(2,3);
console.log(a);
console.log(fruit2);


//number mrthods
let no = 787787;
let no1 = no.toString();
console.log(no1);

//toFixed()
let weigth = 4.567496;
let w2 = weigth.toFixed(3);
console.log(w2);

//valueOf()
let r = 5656;
console.log(r.valueOf());