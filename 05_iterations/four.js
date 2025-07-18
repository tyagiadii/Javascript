const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"

}

// for (const key in myObject) {                                                           // for in loop
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
// }


// const programming =["js" , "rb","java", "c++"]

// for (const key in programming) {
//     console.log(programming[key]);
    
    
        
//     }


const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "UNITED STATE OF AMERICA")
map.set('FR' , "FRANCE")
map.set('PAR' , "PARIS")
map.set('IN' , "INDIA") 

for (const key in map) {
    console.log(key);
    
    
}


