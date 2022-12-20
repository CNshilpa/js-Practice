
function multi(number){  
   return number*number*number;
    }
   console.log(multi(3));
   //user function
   function user(num){
    return num+1;
   }
var output=user(10);
console.log(output);

var pow=new Function("num1","num2","return Math.pow(num1,num2)");  
console.log(pow(2,3)); 

var add=new Function("num1","num2","return num1+num2");  
console.log(add(2,5));