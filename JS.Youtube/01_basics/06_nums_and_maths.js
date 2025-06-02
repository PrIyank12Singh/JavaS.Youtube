const score = 400
// console.log(score); // in this output will be 400

const balance = new Number(100)
// console.log(balance); // in this output will Number:400 as we are signifying that we are assigning a number

// console.log(balance.toString().length); //in this we converted it into string and then we can apply String prototypes
// console.log(balance.toFixed(2)); //it tells about position to be fixed

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(2)); //in this precision priority is given before decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //helps to find out zeros by using comma and can clarify it too by in which format we want specification

//Number.MAX_VALUE/MIN_VALUE and other methods can be used with number too

//********** Maths *********(Maths is in-built in JS)

// console.log(Math);
// console.log(Math.abs(-4)); //converts negative to positive values
// console.log(Math.round(4.3)); //gives round-off, and in this ceil and floor types are there,i.e, Math.ceil()
//Math.min and max are there are too

// console.log(Math.random()); //always give value between 0 and 1, and can be specified too
// console.log((Math.random()*10)+1); //+1 for avoiding to value between 0 and 1 and floor can used in it too

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))+min); 
//this formula is used as sometimes we need min and max, so(max-min) to  define range '+1' to avoid 0 case and '+min' to get min atleast 

//see this video 1 or 2 time more










