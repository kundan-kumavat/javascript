const clock = document.querySelector('.clock')

setInterval(() => {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

document.querySelector('.box').addEventListener('click', function(e){
    console.log("CLicked box")
}, false)

document.querySelector('.btn').addEventListener('click', function(e){
    e.stopPropagation()
    console.log("clicked btn")
}, false)

document.querySelector('#images').addEventListener('click', function(e){
    e.stopPropagation()
    console.log("removed element -->", e.target.tagName)
    if(e.target.tagName === 'DIV'){
        let removeElt = e.target.parentNode
        removeElt.remove()
    }
    //removeElt.parentNode.removeChild(removeElt)
})

// ;(function (){
//     console.log('1')
//     setTimeout(() => {
//         console.log('2')
//     }, 0);
//     console.log(3)
// })()

// ****************************************************************** setTimeout function *********************************************************

// const sayHello = function(){
//     console.log('Hello')
// }

// const changeText = function(){
//     document.querySelector('h1').innerHTML = 'Learning JavaScript'
// }

// const changeMe = setTimeout(changeText, 2000)

// document.querySelector('#stop').addEventListener('click', function(){
//     clearInterval(changeMe)
//     console.log('stopped')
// })

// ****************************************************************** setInterval function *********************************************************
// let intervalId;
// const startTimer = function(){
    
//     const sayDate = function(str){
//         console.log(str, Date.now().toLocaleString())
//     }

//     intervalId = setInterval(sayDate, 1000, 'kundan')
// }

// const stopTimer = function(){
//     clearInterval(intervalId)
//     intervalId = null
// }
// document.querySelector('#start').addEventListener('click', startTimer)

// document.querySelector('#stop').addEventListener('click', stopTimer)

// ****************************************************************** setInterval function *********************************************************
const randomColor = function(){
    let color = "#"
    const hexValues = '0123456789ABCDEF'

    for(let i=0; i< 6; i++){
        color += hexValues[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalId

const changeBack = function(){
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000)
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChange = function(){
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector('#start').addEventListener('click', changeBack)
document.querySelector('#stop').addEventListener('click', stopChange)