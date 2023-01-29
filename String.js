// String is sequesce of character
var str="hello javascript";
// console.log(str);
// console.log(str[4])
    //    1.Externanal method
    // sice method
    var slicestr=str.slice(1,5);
    //  >(start from given index and end from givien index-1)
    // console.log(slicestr);
    var slicestr=str.slice(5);
    // >start from 5 index and end at  last index;
    // console.log(slicestr);
    var slicestr=str.slice(0,-4)
    // staring from given index and -4 means reduced 4char from last index
    // /console.log(slicestr);
// substring method 
 //   //  substr(start,length)->start indexx se shuru hoga aur aage ke kitne character capture krega
 let ans =str.substr(2,6);
 console.log(ans);
 console.log(str)
//  // replasing string
str ="yolo";
console.log(str);
//  // to lower and to upper case
console.log(str.toUpperCase());
str="FOMO";
console.log(str.toLowerCase());
// // concatation method
 let firstn="kamaran";
 let sencondn=" weds khusboo";
 let concatationweds=firstn+sencondn;
 console.log(concatationweds);
//  concat method
let concatStr=firstn.concat(sencondn," and me");
console.log(concatStr);
// // trim method
let trimstr= "          hello     faizul   ";
console.log(trimstr.trim());
var str = "Hello hello my name hello is Abhishek"
console.log(str);
// divides string on the basis of argument and puts them in an array
var a=str.split("hello");
console.log(a);


export const key = "SHA-23402340";
export var exportedObj = {
    name: "Abhishek",
    age:32
}




