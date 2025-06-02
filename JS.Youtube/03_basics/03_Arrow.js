const user = {                        //this is used to refer current context ; this global object hai
  userName: "priyank",
  price: 99,

  welcomeMessage: function(){
    console.log(`${this.userName} , welcome to website`);
    console.log(this);
    
  }

}
// user.welcomeMessage() //and it's context or value can be overwritten 
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);     //it's output will be {}     //browser k andar jo object hai window yaa stand-alone object whereas node k andar empty 

// function chai(){
//   let userName = "hi" //isse agar is this k andar print karenge toh undefined dega
//   console.log(this);          //this hamara object k andar kaam kar raha hai functions k inside use nahi ho raha
  
// }

// chai()        //kisi function k andar sirf this ko print karte hain node environment k andar toh kaafi saari values aati hain

// const chai = function(){
//   let userName = "hi" 
//   console.log(this);          //yahan par bhi undefined hi dega
  
// }

//*****arrow function(=>)********** *

// const chai = () =>{
//   let userName = "hi"     //yahan par bhi {} yaa refer karne p undefined dikhaega this p 
//   console.log(this);         
  
// }
// chai() 
// const addTwo =(num1,num2) =>{         //curly braces{} k andar wrap kiya toh return likhna padega ; and this is explicit return 
//   return num1+num2
// }

//**** implicit return method for arrow function********
// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)  //agar parentheses likhe  toh return nahi likhna padta

const addTwo = (num1,num2) => ({userName:"priyank"})   // wrapping in parentheses is must in arrow function 
console.log(addTwo(3,4))



