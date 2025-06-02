function say(){
  console.log("H");
  console.log("I");
}
//say() //parentheses refers to function execution and if parentheses is removed then it's only give reference 

// function add2nos(no1,no2){          //in this no1,no2 are called parameters when function's definition is made
//   console.log(no1 + no2);
  
// }

function add2nos(no1,no2){         
  let result = no1+no2
  //console.log("hi"); //if it's written after return statement then it wouldn't be printed and result would be printed after it
  // return result
  return no1+no2
  
}

const result = add2nos(3,4)         //in this no1 and no2 are called arguments
// console.log("Result: ",result);

 
function loginUser(userName){                   // some value can be given to userName too for avoiding undefined case
  if(userName === undefined ){                   // (!userName) can be written too for argument for more professionalism
    console.log("Please Enter a userName");                
    return 
    
  }
  return `${userName} just logged in`
}

//console.log(loginUser("hi"));
// console.log(loginUser()); //result will be undefined


function calculateCartPrice(val1,val2,...num1){    //... is rest and spread operator but it is called on the basis of operation
  return num1
}

console.log(calculateCartPrice(200,300,400));  //... will be given in array by ... use ; by val1, val2 200 and 300 values will be given to them and only 400 will be printed

const user = {
  userName : "ps",
  price : 199

}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
  
}

// handleObject(user)
handleObject({
  userName : "sam",        //by this object can be passed too by overwriting
  price: 399
})

//********** function use by array ******
const myArray = [1,2,3,4,5]

function returnSecond(getArray){
  return getArray[2]
}

// console.log(returnSecond(myArray));
console.log(returnSecond([1,2,5,6]));
