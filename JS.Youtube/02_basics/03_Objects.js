//objects can be of two types,1.literal, 2.Constructor
//singleton means made form constructor means it is unique
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Priyank", //by default name is treated as String in system but we don't write in that form if it's written in . method we can't access it
  age : 22,
  [mySym]: "key1",
  location: "Aligarh",
  email: "priyank@gmail.com",
  isLoggedIn: false,
  lastLoginDays : ["Monday","Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //as these are two types to access key's value, '.' method and '[]' method

// console.log(JsUser[mySym]); //key1
// console.log(typeof mySym); //symbol

 JsUser.email = "priyank@gmail.com" //simply can be overwritten as it works on heap memory
 //Object.freeze(JsUser) //for making any key's value unchangeable
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Strong");
  
}
JsUser.greeting2 = function(){
   console.log(`Hello Strong ${this.name}`); //this is for same object reference or by Object name can be called 
}
console.log(JsUser.greeting); //[Function (anonymous)]

console.log(JsUser.greeting()); //will not treated  as a function
console.log(JsUser.greeting2());

//we will mostly use . method but for some specific cases we will use [] method