// 3 type of function 
// 1) Normal function 
  
  //  function defination
  function function_name(param1,param2){
    // do something
  } 
//   function invoke
//  function_name(arg1,arg2);
function add(a,b){
    console.log(a+b);
}
add(2,3);
// function is treated as first class citizens in javascript
//   ->function can return
// ->function can be passed as parameters/argument
 function calculator(str,a,b){
    if(str=='add' ){
        return function add(){
            console.log(a+b);
        }
        
    }

 }
 let returnedfunction=calculator('add',2,3);
 console.log(returnedfunction);
 returnedfunction()
//  2) Expression function
let sayhii=function (){
    console.log('Expression function');
}
sayhii();
console.log(""+sayhii)
// IIFE ->IMEDIATE INVOKE FUNCTION EXPRESSION 
let additioniife=(function(a,b){
    console.log(a+b);
})(20,30);