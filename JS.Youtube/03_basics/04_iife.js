//Immediately Invoked Function  Expression(IIFE) is used to remove pollution from global object and it's used to immediately execute a function

(function chai(){  //it's named iife
  console.log(`DB connected`);
  
})();            //; is used to tell where to stop execution 

( (name)=>{                              //it's un-named iife ; it is same as function  
  console.log(`DB Connected two ${name}`);
  
}
) ('priyank')