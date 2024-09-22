class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const kundan = new User('kundan')
// console.log(kundan.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const newTeacher = new Teacher('new', 'new@example.com')
console.log(newTeacher.createId())