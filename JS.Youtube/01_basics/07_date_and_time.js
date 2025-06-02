//read about date from mdn

let myDate = new Date()
// console.log(myDate.toString()); //to String is used for conversion and other methods too trying running other too
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //date is an object  in js

//let myCreate = new Date(2025, 0, 23) //months starts from 0 if taken in array in js but from 1 in normal dd-mm-yyyy format
//let myCreate = new Date(2025, 0, 23, 5,3) //gives more specification
let myCreate = new Date("2025-01-14")
// console.log(myCreate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //value is given in ms
// console.log(myCreate.getTime()); //gives the value from creation and can be compared 
//console.log(Math.floor(Date.now()/1000)); // to give ms into seconds

let newDate = new Date()
//console.log(newDate.getDay()); //and other specifications are there too and '+1' in month

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
  weekday: "long",
  
}) //is vip as we define object in it and we define other parameters in it  too









