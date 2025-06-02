//const tinderUser = new Object() //it's a singleton object
const tinderUser = {} //it's a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email : "some@gmail.com",
  fullname:{
    userfullName : {
      firstName: "priyank",
      lastname: "singh"        //we can go into as many as nesting we want

    }
  }
}
// console.log(regularUser.fullname?.userfullName.lastname); //? tells if it's present then proceed

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2} //will give obj2 as third element 
//const obj3 = Object.assign({},obj1, obj2) //{} means all values will be combined and result is guaranteed and it will act as a target and other will act as source 
//console.log(obj3);
// read about Object.assign form mdn

const obj3 = {...obj1,...obj2} //spread method is most preferable
// console.log(obj3);

const users =[ 
  {
  id:1,
  email:"h@gmail.com",

},
{
  id:2,
  email:"i@gmail.com",

}
]
users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //this method is  very important by this we can apply different array functions on it
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //will treat every element as array where first is key and second is value


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //tells if key is present or not


const course = {
  courseName : "Js",
  price:"99",
  courseInstructor: "hit"

}

//course.courseInstructor //only a syntactical method to write but important

const{courseInstructor} = course //value can de-structured by using : as courseInstructor:instructor; matlab y batata hai ki courseInstructor kisse extract kar rahe hain jo ki course hai

console.log(courseInstructor); //upar waala define karne se phir seedhe likh sakte hain

//ex of json
// {
//   "name":"priyank", //like this values are called like this
//   "courseName": "js",
//   "price":"free"
// }


 //sometimes in array also called in api's check random user me api
// [
//   {},
//   {},
//   {}
// ]
 //json is vastly used in api industry