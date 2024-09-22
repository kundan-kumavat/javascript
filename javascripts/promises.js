const promiseOne = new Promise(function(resolve, reject){
    //Do an asynk tasks
    //DB calls , cryptography, network
    setTimeout(function(){
        console.log('Promise one is created')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise 1 consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise Two is created')
        resolve()
    }, 1000)
}).then(function(){
    console.log('promise 2 consumed')
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'kundan', email: 'kundan@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
    // return user.username
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'kundan', password: '123'})
        }else{
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Promise 4 is either resolved or rejected')
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javascript', password: '123'})
        }else{
            reject('Error: js went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumedPromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/kundan-kumavat')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllUsers()

fetch('https://api.github.com/users/kundan-kumavat')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => console.log(error))