const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) //it takes dc as 4th  element marvel , push make changes in existing array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const  allHeroes = marvel_heroes.concat(dc_heroes) //it creates problem , whereas concat makes changes and give new array
// console.log(allHeroes);


const all_new_Heroes = [...marvel_heroes,...dc_heroes] //this is spread method to add arrays, this is more preferable than concat
// console.log(all_new_Heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //flat helps to spread multi arrays can value can be given till which we want spreadness
// console.log(real_another_array);


// console.log(Array.isArray("Priyank"));
// console.log(Array.from("Priyank")); //converts value into  array and any value can be given
// console.log(Array.from({name:"Priyank"})); //interesting case as it  doesn't directly convert into array we have to specify it in which format we want it


let score1= 100
let score2 = 200

// console.log(Array.of(score1,score2)); //in of we have to specify the element we want included in array 

// read more about isArray, from, of method


