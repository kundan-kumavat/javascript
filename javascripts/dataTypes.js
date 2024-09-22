let String = 'hitesh';
let var1 = null
console.log(typeof String)
console.log(typeof null)

let key = Symbol('123');
let key1 = Symbol('123');

console.log(key==key1)

const arr = ["abc", "kjs", "sjh", "sjh"];
const obj = {
    type: 'a',
    children: "ksj",
    props: "jdf"
};

// Stack(primitive), Heap(Non-primitive)
const fun = function(){
    console.log('function object');
}

console.log(+true);
console.log(+"");

console.log(null >= 0);
console.log("2" == 2)