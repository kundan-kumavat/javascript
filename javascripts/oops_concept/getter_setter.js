// Getter and setter using classes

class User{
    constructor(email, password){
        this.email =email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const newUser = new User('kundan@example.com', 'abc')
console.log(newUser.password)

// Getter and Setter using objects

const ObjectUser = {
    _email: 'kundan@example.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(ObjectUser)
console.log(tea.email)

// Getter and setter using Define property
function FunctionUser(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const userOne = new FunctionUser('kundan@example.com', '123')
console.log(newUser.email)