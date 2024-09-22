function setUserName(username){
    this.username = username
}

function createUser(username, password, email){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser('kundan', 'kundan04', 'kundan@example.com')
console.log(chai)