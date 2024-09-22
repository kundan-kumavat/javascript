let count = 1;

function increment(){
    count += 1;
    console.log(count);
}

document.getElementById('counter').innerText = `count: ${count}`;

const input = document.getElementById('inp');
input.addEventListener('blur', function(){
    input.value = input.value.toUpperCase();
});