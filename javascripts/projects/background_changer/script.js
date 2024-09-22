const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    })
})