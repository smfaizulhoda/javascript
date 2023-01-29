// String is sequesce of character
var str="hello javascript";
console.log(str);
console.log(str[4])
    //    1.Externanal method
    // sice method
    var slicestr=str.slice(1,5);
    //  >(start from given index and end from givien index-1)
    console.log(slicestr);
    var slicestr=str.slice(5);
    // >start from 5 index and end at  last index;
    console.log(slicestr);
    var slicestr=str.slice(0,-4)
    // staring from given index and -4 means reduced 4char from last index
    console.log(slicestr);