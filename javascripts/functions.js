let sum = 0;

function calculateCartPrice(...nums){
    return nums
}
// console.log(calculateCartPrice(200, 300, 1000))

const user ={
   username: 'hitesh',
    price: '6000'
}

function handleObject(anyObj){
    if(!anyObj.username) return `Please login`
    return `The price of ${anyObj.username} is ${anyObj.price}`
}
// console.log(handleObject(user))

// *********************************Arrow Function****************************************************

// function chai(){
//     let username = 'kundan'
//     console.log(this)
// }

// chai()

function chat(){
    ;(() => {
        console.log(this)
    })()

    const chai = () =>{
        let username = 'kundan'
        console.log(this)
    }
}

chat()


// **************************************IIFE***********************************

// (
//     function chai(){
//         console.log('DB Connected')
//     }
// )();

// ((name) => {
//     console.log(`Arrow function by ${name}`)
// })('kundan')

// function iife(){
//     let username = 'kundan';
//     ((name) => {
//         console.log(`Username is ${name}`)
//     })(username)
// }

// iife()