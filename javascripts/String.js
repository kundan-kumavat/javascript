const name = "kundan";
const score = 50

// String Interpolation
console.log(`My name is ${name}`)

const gameName = new String('kundan');
console.log(gameName.charAt(0));
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4);
console.log(newString);

const newString1 = gameName.slice(-5, 4);
console.log(newString1);

const newString2 = "   kundan   "
console.log(newString2.trim());

const url = "https://www.google.com";

console.log(url.replace('g','p'))

console.log(url.includes('google'))

const myName = 'kundan-google-com'

console.log(myName.split('-'))