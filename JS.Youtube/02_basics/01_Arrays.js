const myArr = [0,1,2,3] //in js an array can contain of different data types too
const myArr2 = new Array(1,2,3,4)
// console.log(typeof myArr2);

//array are resizable
//not associative means array elements cannot be accessed using arbitary string,i.e,arr[one]
//array create shallow copies(means simply heap memory) and deep copies (stack memory)

//Array methods

// myArr.push(6)
//myArr.pop() , will simply pop last element 
// myArr.unshift(6) //will add element at first in array
// myArr.shift() 
// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(3)); //if absent element is asked -1 is given as output

// const newArr = myArr.join() //vip
// console.log(myArr);
// console.log(typeof newArr); //String type will be given as it's converted into String by csv

//slice, splice difference is that slice don't manipulate original array whereas splice does 
//another difference that slice gives range-1 output whereas splice includes range too

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);
