

// console.log("HIII")  treat all JS code as newer version

 // alert( 3+3)   //  we are using nodejs not browser

 //console.log(typeof "ASHWANI");
//console.log(typeof undefined); // output - undefined
// console.log(typeof null);  // output - object


 // Basically data types are of two types :
 // primitive and non-primitive
 // primitive are of 7 seven types :                               primitive - callbyValue
 
 // string , Number , Null means empty , Boolean , undefined  , symbol , BigInt 



 //Reference Type or Non-primitive 
 //Array , object , Functions 


 // +++++++ How did Memory Allocation worked in javaScript +++++++++++++++++++++++++++
 // Thera are two types of memory are as:

 // stack memory  used in (Primitive type) - whenever stack memory is used whatever you declared a variable you will get a copy of that variable
 
 // Heap memory  used in (Non-primitive type ) - In Heap we get reference of the original value.
//example are as:

let mYoutubename = "ashwanityagii@com"
let anotherName = mYoutubename
anotherName = "wannabeCoder"


// console.log(mYoutubename);
// console.log(anotherName);

let userOne ={
    email : "user12@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ashwanigoogle@12"
console.log(userOne.email);
console.log(userTwo.email);




