//if condition, if else, else if, switch

let items = 40;

// if(){
//code block
// }

//items greater than or equal to 50 
if (items >= 50) {
    console.log("stock available");
}

//if else
if(items >= 50){
  console.log("stock is available");
}
else{
   console.log("limited stock available");
}


//else if :miultiple cond

if(items >= 50){
  console.log("stock is available");
}
else if( items >= 20){
   console.log("few itmes left");
}
else if( items >= 1){
   console.log("Hurry Up few stock availble");
}
else{
    console.log(" Out of stock");
}