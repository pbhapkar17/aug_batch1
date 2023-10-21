
function addNumber(){
    let number = parseInt(prompt("Enter a number"));
    for(let i = 1 ; i <=10; i++){
         res = number * i;
       console.log(res);  
       document.write(res, "<br>")  ;
    }
    document.getElementById("table").innerHTML = res + '<br>'
   }