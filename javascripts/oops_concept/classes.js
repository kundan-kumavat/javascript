// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('kundan', 'kundan@example.com', 'kundan')
// console.log(chai.encryptPassword())

// Behind the scene
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.username}abc`
}

const user = new User('kundan', 'kundan@example.com', 'kundan')
console.log(user.encryptPassword())