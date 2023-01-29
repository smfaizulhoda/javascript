console.log("hello javascript");
// var let const
// varialble intalization 
var a;
// variable declaration
a=10;
console.log(a);
console.log(typeof a);
a="faizul"
console.log(a);
console.log(typeof a);
a=true;
console.log(a);
console.log(typeof a);
a=null;
console.log(a);
console.log(typeof a);
//  1 var has some problem
// redeclaration is allow


    // let 
    // redeclartion is not allow but reinsialisation is allow
    let b;
    b=10;
    console.log(b);
    // let a=20;// SyntaxError: Identifier 'a' has already been declared
    // console.log(a);
    b="saba";
    console.log(b);
    // const
    // const not allowed redeclration nor resisation
    const c=10;
    console.log(c)
    // c=`saba`;  TypeError: Assignment to constant variable.
    console.log(c)
    // 2nd problem with var keyword 
    //    .var is function scope in case of function else is global scope
    // let is block scope
    var r=10;
    for(var i=0;i<r;i++){
        if(i%2==0){
            var h=1000;
            console.log(i);
        }
    }
    console.log(r);
    console.log(h);

    for(let i=0;i<10;i++){
        console.log(i);
        let j=200;
        console.log(j);
    }
// console.log(j) ReferenceError: j is not defined