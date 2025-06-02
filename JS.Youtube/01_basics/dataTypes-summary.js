// Primitive types, they are called by value

// 7 types : String, Number(100 or 100.3 no specific function for decimal or any other), Boolean, null, undefined,
//  Symbol(const id = Symbol('123), and values can be same but return type will be different), BigInt(at last represent n)

// Non Primitive or reference types, they are given reference in memory directly

// Array, 

// Objects are written in key value pair. let myObj{name:"ps", age:20,}

//  Functions can be treated as variable in js
// const myFun = function(){
//  console.log("Hello");
// }

// typeof can tell datatype and read about it in ecma and it return function on function but actually it is object function
// and give symbol for symbol

//*************About Memories****************

//Stack(Primitive), Heap(Non-Primitive)
//Stack k andar copy milti hai declared variable ki
//Heap k andar reference milta hai original value ka matlab agar change hota hai toh original value mein hi hota hai


// let myName = "ps"

// let anothername = myName
// anothername = "yn"

// console.log(myName);
// console.log(anothername);

// let user1 = {
//   email: "user@gmail.com",
//   upi: "user@ybl"
// }

// let user2 = user1

// user2.email = "ps@google.com"

// console.log(user1.email);  //variable.anyValue means '.' can be used to access key in any defined object 
// console.log(user2.email);










