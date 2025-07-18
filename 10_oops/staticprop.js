class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }


}

const ashwani = new User("ashwani")
console.log(ashwani.createId())


