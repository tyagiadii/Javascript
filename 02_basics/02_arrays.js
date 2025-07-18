const marvel_heroes = ["thor" , "Spiderman" , "Batmen" ,"Ironman"]
const dc_heroes = ["superman" ,"flash" ,"Daredevil", "Kingsman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

 
const all_new_heroes = [...marvel_heroes , ...dc_heroes]       // spread operator
console.log(all_new_heroes);

const another_array = [1,2,3, [4,5,6,] ,7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("ashwnai"))   // Lets check whether this is array and want to check whether this return array or not

console.log(Array.from("ashwnai"))     // by using Array.from we can get this in the form of array.
console.log(Array.from ({name:"ASHWANI"}));   // it will not return anything 


let score1 = 100 
let score2  = 200
let score3 = 300    // we have this score and have to convert into an array

console.log(Array.of(score1,score2,score3));  // by using Array.of method it will return the score in form of array.


// DO SOME PRACTICE 
// Array.isArray() 
// Array.from()
// Array.of ()
 




