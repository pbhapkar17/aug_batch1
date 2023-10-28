let text = "user live in Mumbai , i like Mumbai i like satara i love mango";

let textLength = text.length;
console.log(textLength);

console.log(text.length);

let slicedText = text.slice(2,6);  //start index : inclusive, end index : exclusive
console.log(slicedText);
console.log(text.slice(10,16));
console.log(text.slice(5));
console.log(text.slice(-13,-5)); //start index : exclusive, end index : inclusive
console.log(text.slice(-13));


console.log(text.substring(-1,10));  //negative value is treated as 0 here, end index is exclusive

console.log(text.substr(2,6));  //start index, length


console.log(text.replace('Mumbai','Pune')); //method replaces only the first match

console.log(text.replace('jjbkjbkj','Pune')); //original string

console.log(text.replace('mumbai','Pune')); //original string: replace is case sensitive

console.log(text.replace(/mumbai/i,'Pune'));

console.log(text.replace(/mumbai/ig,'Pune')); //insensitve / globally replace

console.log(text.replaceAll('Mumbai ','nashik')); //case sensitive
console.log(text.replaceAll(/mumbai/ig,'nashik'));

console.log(text.replace( /uSer live In Mumbai , i like Mumbai/i, "poonam"));

console.log(text.replace('I like','lllll'));

// function replaceFirstOccurrence(str, find, replace)

// { return str.replace(new RegExp(find), replace); }
//  var originalString = "This is a test. This is a test. This is a test."; 
//  var searchString = "This is a test.";
//  var replacementString = "That was a test."; 
//  var resultString = replaceFirstOccurrence(originalString, searchString, replacementString); 
// console.log(resultString);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//concat()

let firstName = 'poonam';
let lastName = 'patil';
let no =60600;
// let fullName = firstName + " " + lastName;
let fullName = firstName.concat(' ',no,' ', lastName , ' ',40000);

console.log(fullName);

console.log('lwr->',text.toLowerCase(), 'upr->',text.toUpperCase());

//The trim() method removes whitespace from both sides of a string:
let data = '         kjkjkj              ';
console.log(data.trim());

var string = "    This    should  become   something          else   too . ";
stringData = string.trim().replace(/\s+/g, " ");
console.log(stringData);

//toString()
let num = 65656565;
let data1 = num.toString();
console.log(data1);



let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char);
let d = text1.charAt(20);
console.log(d); // it will return empty

//split()
let date = "04-april-1992";
let newDate = date.split('-')  //it splits out data and will return array.
console.log(newDate);
console.log(newDate[2]);

let num2= "65656565";
let m = parseInt(num2)
console.log(m);

let text4 = "cvv cvfbfbf vbgbgb vbgbgb vbgbgb";
t5 = text4.split(" ");
console.log(t5);

let add = "bxh jsbxhjsbx poonam chsbhxbshb";
console.log(add.includes("poonam")); //include method returns true if value is include in data else will return false

// {
 //"status":"success", 
// "statusCode":"100256",
//  massage:"data submited successfully"
// }

let statusCode ="100256";
let a = statusCode.startsWith("100");
console.log(a);
console.log(statusCode.endsWith("56"));

let text5 = "Hello to world, welcome to the to universe.";
// let result = text5.indexOf("to");  //it should return first match of index 
let result = text5.indexOf("toooo");  //-1
console.log(result);
console.log(text5.lastIndexOf("to"));
console.log(text5.lastIndexOf("toooooo")); //-1

let text6 = "Mr. Blue has a blue house";
//let position = text6.search("blue");
let position = text6.search(/blue/i);  //we can add regex patteren 
console.log(position);//diff betw search and indexOf method : we cannot pass reg ex pattern to indexOf

// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.
// The search() method returns the position of the first match.
// The match() method returns an array of matches.

let text7 = "The rain in SPAIN stays mainly in the plain";

let g = text7.match("ain");
console.log(g);
console.log( text7.match(/ain/g));