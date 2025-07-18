// 🌍 1. What is Lexical Scope?
// Lexical scope just means:

// “Where you write your code decides what variables you can use.”

// Imagine this:
// You write a function inside another function.
// The inner one can see what’s inside the outer one.

// 🧠 Think of it like a house:
// The outer function is a big room.

// The inner function is a small room inside it.

// The small room can see everything in the big room.

// 🔧 Code Example:
// js
// Copy
// Edit
// function outer() {
//   let name = "John";

//   function inner() {
//     console.log(name);  // ✅ inner can see name
//   }

//   inner();
// }
// outer();
// 🔍 inner() can see the variable name because it’s inside the same scope.

// 🔒 2. What is a Closure?
// A closure is when a function remembers the variables around it even after the outer function is done.

// ✅ It's like your function is carrying a backpack full of variables it saw when it was created.

// 🎮 Real-World Example: Button Click Counter
// You want to make a counter that remembers how many times you clicked a button.

// Here’s the code:

// js
// Copy
// Edit
// function createCounter() {
//   let count = 0; // this variable lives inside createCounter()

//   return function() {
//     count++;
//     console.log("Clicked", count, "times");
//   };
// }

// const clickCounter = createCounter();

// clickCounter(); // Clicked 1 times
// clickCounter(); // Clicked 2 times
// 🧠 What just happened?
// You called createCounter() → it made a function that increases count.

// count is a local variable — normally it would disappear.

// But the function that was returned remembers count — because of closure!

// ✅ Summary for Beginners
// Term	Meaning in Simple Words	Real-Life Use
// Lexical Scope	Inner code can see outer variables	Functions accessing variables around them
// Closure	A function "remembers" variables even after the outer function is done



// function outer(){
//     let name = "Ashwani";

//     function inner(){
//         console.log(name);
        
//     }
//     inner();
// }


// outer();



// function outer(){
//     function inner(){
//         let innerVar = "i am inside"
//     }
//     console.log(innerVar);
    
//     inner()
// }
// outer()




