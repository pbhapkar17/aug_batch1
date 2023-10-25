let text = "user live in Mumbai , i like Mumbai i like satara i lova mango";

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

function replaceFirstOccurrence(str, find, replace)

{ return str.replace(new RegExp(find), replace); }
 var originalString = "This is a test. This is a test. This is a test."; 
 var searchString = "This is a test.";
  var replacementString = "That was a test."; 
  var resultString = replaceFirstOccurrence(originalString, searchString, replacementString); 
console.log(resultString);