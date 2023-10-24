let text = "user live in Mumbai";

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
