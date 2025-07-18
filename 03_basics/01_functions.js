//FUNCTIONS


function sayMyName() {
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("G");
    console.log("I");

}

//sayMyName()                            // this is the reference of my function


// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);

// }

// addTwoNumber()




// function addTwoNumber(number1,number2){                          // here number1 , number2 are perimeters
//     console.log(number1 + number2);

// }

//addTwoNumber(10,20)                                          //when we call the function here 10,20 arguments
// addTwoNumber(10,"4")
// addTwoNumber(10,"a")



function addTwoNumber(number1, number2) {

    // let result = number1 + number2 
    // return result
    return number1 + number2

}


// const result = addTwoNumber(3,5)
// console.log("Result: " , result);



function loginUserMessage(username = "ashwani") {
    if (username === undefined) {
        console.log("Please eneter the username");
        return
    }
    return `${username} just logged in`

}



// const result = loginUserMessage("Ashwani")
// console.log("Result : ", result);   

//console.log(loginUserMessage("Ashwani"));
// console.log(loginUserMessage("Tyagi"));

/// ... are also known as rest operator or spread operator but depends upon when to call it is a spread operator or rest operator here it is rest operator 


function calculateCartPrice(...num1){                /// ... are also known as rest operator or spread operator
    return num1

// function calculateCartPrice(val1,val2, ...num1){ 
//     return num1
// }


}

// console.log(calculateCartPrice(200,400,500,600));



const user = {                                      // this is my and i need to pass this object to my function
    username : "Ashwani",
    prices: 69

}


function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
// handleObject(user)

handleObject({                                                // we can pass the object like this also
    username : "Ashwani",
    price: 69
})



// we can pass the array also just like we did object.


const myNewArray = [ 200,400,100,600]

function returnSecondValue (getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));