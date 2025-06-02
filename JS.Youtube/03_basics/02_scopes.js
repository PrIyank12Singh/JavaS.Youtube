// var c = 300 //so basically avoid 
let a =300
if(true){     //written inside this if is called block  scope and outside it is called global scope

  let a = 10
  const b = 20
  // var c = 30
  // console.log("INNER: ",a);
  

}

//console.log(a);     //a and b gives error if written only in if and not declared outside in global scope
// console.log(b); 
// console.log(c); //prints as var give block and functional scope error


//if we check scope in browser and in node in code environment global scope will be different


function one(){
  const username = "priyank"

  function two(){
    const website = "youtube"
    // console.log(username);
    
  }
  // console.log(website); //as it's scope ended and one was still  accessing it

  two()     //if two isn't called then it wouldn't be executed
  
}

one()

if(true){
  const username = "priyank"
  if(username == "priyank"){
    const website = "youtube"
    console.log(username + website);
    
  }
  // console.log(website); //as website and username variables are accessed outside their scopes
  
}
// console.log(username);

// ***************Interesting************

//addOne(5)   //if written here it wouldn't give error as addOne is only declared
function addOne(num){
  return num+1
}

addOne(5)


//addTwo(5)     //it will give error as it's declared and hold within const; and we will learn more about this in hosting and execution context
const addTwo = function(num){             //sometimes addTwo is also called expression
  return num+2
}

addTwo(5)