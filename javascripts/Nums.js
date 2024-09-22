const score = 400

const balance = new Number(400)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherName = 25.974;
console.log(otherName.toPrecision(3));

const hunderds = 100000
console.log(hunderds.toLocaleString('en-IN'));

// **************************Maths***************************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.sqrt(64));
// console.log(Math.min(4,3,3,1));

console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)