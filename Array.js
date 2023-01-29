// Array is collection of element
let cars=['bmw',1,2,3,'faizul',true];
console.log(cars);
// Accesing element 
console.log(cars[4]);
// replacing the element in aaray
cars[4]='saba';
console.log(cars);
// adding the element in array
cars[6]='Mahidra'
console.log(cars)
// Method in array
    //  pop ->removes the element in array from last
    cars.pop();
    console.log('pop element\n'+cars)
    console.log(cars)
    // push ->add element in last of array
    cars.push("tata");
    console.log(cars);
    // unshift method ->this add the at the staring of element
    cars.unshift("sohail");
    cars.unshift("kamaran");
    console.log(cars)
    // shift method ->removes the element at 0th index
    cars.shift();
    cars.shift();
    console.log(cars);
    console.log(cars.length);
            //    2d Array
let array2d=[
    [1,2,3,4],
    [5,6,7,,8],
    [9,10,11,12]
]
console.log(array2d);
console.log(array2d[1][2]);
console.table(array2d);