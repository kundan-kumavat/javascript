let myHero = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.kundan = function(){
    console.log('kundan is present in all objects')
}

Array.prototype.heyKundan = function(){
    console.log('kundan in an array')
}

// heroPower.kundan()
// myHero.kundan()

myHero.heyKundan()

const user = {
    name: 'kundan',
    email: 'kundan@example.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'javascript',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'kundan   '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()