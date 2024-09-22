const user = {
    username: 'kundan',
    loginCOunt: 0,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`User name: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.getUserDetails())

// const promisOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User('kundan', 12, true)
const userTwo = new User('user2', 10, false)
// console.log(userOne.constructor)
console.log(userOne)

// function addTwoNumbers(a, b){
//     this.a = a;
//     this.b = b;
//     return this;
// }

// const func1 = addTwoNumbers(2,3)
// const func2 = addTwoNumbers(3, 5)
// console.log(func1.a, func1.b)