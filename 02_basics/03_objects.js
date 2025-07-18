// we can declare objects are using two ways :
// 1) Literal  --> not singleton
// 2) Constructor --> singleton 

// singleton 
// object literals



const mySym = Symbol("key1")


const JsUser =  {
    name:"ASHWANI",
    "full name" : "ASHWANI TYAGI",
    [mySym] : "key1",
    age:20,
    location:"DELHI",
    email:"tyagiashwani@12",
    isLoggedIn: false,
    lastLoginDays: ["MONDAY" , "SUNDAY"]

}
 
// console.log(JsUser.name);          // we can access the object by using .operator
// console.log(JsUser["location"]);   // we can also access the object by using[""] 
// console.log(JsUser["full name"]);   // we cannot access the full name by using the .operator so we have to give square notation in it.
//onsole.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym])


JsUser.email = "ashwani@user.com"
// Object.freeze(JsUser)
JsUser.email = "ashwani@chatbot.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("HELLO TYAGI JAVASCRIPT");
    
}

JsUser.greetingTwo = function(){
    console.log(`HELLO TYAGI JAVASCRIPT,${this.name}`);
    
}


console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo());













