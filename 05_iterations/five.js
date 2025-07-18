const coding = ["js" , "ruby","java","python", "cpp"]

// coding.forEach( function  (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {                           // we can do with the arrow function also
//     console.log(item);
    

// } )


// function printMe(item) {
//     console.log(item);
    
// }


// coding.forEach(printMe)


// coding.forEach ( (item , index ,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "pyth",
        languageFileName : "js"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )


