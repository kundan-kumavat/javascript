const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI)
console.log(descriptor)

const chai = {
    name: 'kundan',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('Make')
    }
}

Object.defineProperty(chai, 'name', {
    // value: 'hello',
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}