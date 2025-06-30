let sum = 0;


// rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// a function defination can have only one rest parameter
// it should be the last parameter 
// rest cannot have default values
// it may be desturctured, which allows you to ignore certain parameter postions
// is not countered towards the fucntions length property
// methods like sort(), map(), forEach(), or pop() can be applied on it
// but doesnot contain any named arugments defiend before the ...restParameter
function calculateCartPrice(...nums) {
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

const user = {
    username: 'hitesh',
    price: '6000'
}

function handleObject(anyObj) {
    if (!anyObj.username) return `Please login`
    return `The price of ${anyObj.username} is ${anyObj.price}`
}
// console.log(handleObject(user))

// this Keyword Behavior

// Normal functions have their own this context, depending on how they are called.
// Arrow functions do not have their own this. They inherit this from the enclosing lexical scope (the context in which they are defined).

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

function chat() {
    ; (() => {
        //console.log(this)
    })()

    const chai = () => {
        let username = 'kundan'
        //console.log(this)
    }
}

//chat()


// **************************************IIFE***********************************

;(
    function chai() {
        //console.log('DB Connected')
    }
)()

;((name) => {
    //console.log(`Arrow function by ${name}`)
})('kundan')

function iife() {
    let username = 'kundan';
    ((name) => {
        //console.log(`Username is ${name}`)
    })(username)
}

iife()

function Login() {
    let username = "Kundan";
    console.log(`${this.username}`)
    // undefined

    function newLogin() {
        console.log(`${this.username}`)
        // undefined
    }

    newLogin()
}

// Login()

function test() {
    this.username = 'kundan'
    console.log(this.username)
    // kundan

    console.log(this)
    // In browser: Window object
    // In node: Global Object

    return this
}

// console.log(test())
// test()

const test2 = () => {
    this.username = 'kundan'

    console.log(this)
    // {}
    // In browser: Window object

    console.log(this.username)
    // kundan

    return this
}

// test2()
// console.log(test2());


// ; (() => {
//     this.username = 'hitesh'
//     console.log(this)
//     // {}

//     console.log(this.username)
//     // hitesh
// }
// )()

// Normal functions have access to the built-in arguments object.
// Arrow functions do not have their own arguments.

function normalFunc() {
    console.log(arguments);
}

// normalFunc()

const arrowFunc = () => {
    console.log(arguments);
    // {}
}

// arrowFunc()


const person = {
    name: 'Kundan',
    greet: function () {
        console.log(`Hi, I'm ${this.name}`); // Works as expected
    }
};

const personArrow = {
    name: 'Kundan',
    greet: () => {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person.greet();       
// Hi, I'm Kundan

personArrow.greet();  
// Hi, I'm undefined

const obj = {
    name: "Kundan",
    greet: function () {
      const arrow = () => {
        console.log(this.name);
      };
      arrow();
    },
};
  
obj.greet(); // "Kundan"