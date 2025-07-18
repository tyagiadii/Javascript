// Immediately Invoked Function Expression (IIFE).               // it executes the function immediately.

(function coffee() {                                             // named IIFE coffee
    console.log(`Database Connected`);
    
})();                                            // to stop the context in IIFR alawys give semicolon ; at the end 


(  (name) =>  {                                     // this is no named IIFE
    console.log(`db connected two ${name}`);        // this is arrow function now there is no error.
    
})  ('Ashwani')








//  because the global scope polution problem aries so many times so to remove the global variable or any global declaration to remove the polution we used IIFE.