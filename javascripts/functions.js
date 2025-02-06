let sum = 0;


// rest parameter syntax allows you to a function to accept an indefinite number of arguments as an array
// a fucntion defination as only one rest parameter
// it should be the last parameter 
// rest cannot have default values
// it may be desturctured, which allows you to ignore certain parameter postions
// is not countered towards the fucntions lenght property
// methods like sort(), map(), forEach(), or pop() can be applied on it
// but doesnot contain any named arugments defiend before the ...restParameter
function calculateCartPrice(...nums){
    return nums
}
console.log(calculateCartPrice(200, 300, 1000))

// the spread syntax allows an iterable, such as an array or string, 
// to be expanded in place zero, or more arguments, or elements are expected
// In an object literal, it enumerates the properties of an object and add key-value pairs to the object being created
// spread opertor expands while rest operator combines or collects
// can be used in functions agruments myFucntion(a, ...iterableObj, b), 
// Array literal [1, ...iterableObjb, 4]
// Object literals { ...obj, key: 'value'}

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

// An arrow functions is a concise syntax with some semantics difference and delibrate limitations
// Arrow functions don't have their bindings to this, arguments, or super and should not be used as methods
// arrow functions cannot be used as constructors
// arrow functions cannot use yeild within their body and cannot be created as generateor functions
// rest parameter, default parameter and destructuring within the params is supported

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

;(
    function chai(){
        console.log('DB Connected')
    }
)();

((name) => {
    console.log(`Arrow function by ${name}`)
})('kundan')

function iife(){
    let username = 'kundan';
    ((name) => {
        console.log(`Username is ${name}`)
    })(username)
}

iife()