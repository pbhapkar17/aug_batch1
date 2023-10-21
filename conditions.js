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
if (items >= 50) {
   console.log("stock is available");
}
else {
   console.log("limited stock available");
}


//else if :miultiple conditions comparision

if (items >= 50) {
   document.write("stock is available");
}
else if (items >= 20 && items <= 50) {
   document.write("few itmes left");
}
else if (items >= 1 && items <= 20) {
   document.write("Hurry Up few stock availble");
}
else {
   document.write(" Out of stock");
}
document.write('<br>','<br>');

//equality
let playerName = 'virat kohali';

switch (playerName) {
   case "sachin tendular":
      document.write('cricket player');
      break;
   case "virat kohali":
      document.write('cricket player');
      break; //if we dont write break it will continue excute all the cases
   case "saniya":
      document.write('tennis player');
      break;
   case "messi":
      document.write('football player ');
      break;
   default:
      document.write('match not found');
      
}