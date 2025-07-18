

//const tinderUser = new object ()     --singleton object 

const tinderUser = {}                   //Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        usernfullname : {
            firstname : "ASHWANI",
            lastname : "TYAGI"
        }
    }
}


// console.log(regularUser.fullname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c" , 4:"d"}
const obj4 = {5: "e" , 6:"f"}

//const obj3 = Object.assign({}, obj1,obj2,obj4)   // object.assign will concat your array and result in returning single array.



const obj3 = {...obj1, ...obj2}               //spread operator will return your array into single array
// console.log(obj3);

const user = [
    {
        id:1,
        email:"h1@gamil.com"


    },
      {
        id:2,
        email:"h2@gamil.com"


    },
      {
        id:3,
        email:"h3@gamil.com"


    },
    
    
]

//user[1].email               // to access the objects we use square bracket and . operator like this [].
// console.log(user[1].email );


//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty("isLogged"));     // to check whether it has that property or not

const course  = {
    course: "JS",
    price: 999,
    CourseInstructor: "Ashwani tyagi"

}

// course.CourseInstructor
// console.log((course.CourseInstructor));
//Instead of that we will use object destructing


const {price} = course   // this is our object destructuring
console.log(price); 

// we can also do destructuring for array also.














