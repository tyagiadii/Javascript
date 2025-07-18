class User {
    constructor(email, password) { // <-- lowercase 'constructor'
        this.email  = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {                                     // never return in setter
        this._password = value.toUpperCase();
    }
}

const ashwani = new User("ashwani", "123");
console.log(ashwani.password);



