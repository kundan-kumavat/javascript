// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["kun", "dan"]

// const Concat = myArr.concat(myHeros)
// console.log(Concat);

// const myArr2 = new Array(1, 2, 3, 4)
// const myArr3 = myArr2.map((arr) => {
//    return arr*3;
// });

// console.log(myArr2);
// // console.log(myArr2[0]);

// // Array Methods 
// myArr.push(6);
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(typeof newArr)
// console.log(myArr)

// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3);
// console.log("C ", myArr);
// console.log(myn2);

function func1(){
   return 1
}

function func2(){
   return 4
}

let funcvar= (func1(), func2(), 1)
console.log(funcvar)
// 4 

const arr = ['one', 'two', 'three'];
const str = 'hello';

const res = arr.includes('on');
//false
const anotherVar = arr.includes('onetwo');
//false
const newVar = str.includes('ll');
// true

console.log(res);
console.log(anotherVar);
console.log(newVar);

console.log(true == '');
console.log('1' == 1);

let a = 10;
// this will create a object variable
let b = new Number(10);
let c = 10;

console.log(a === b);
// false


// Shallow copy and deep copy
let obj = {
   name: 'kundan'
};

let z = {...obj};
z.name = 'kundan2';
console.log(obj.name);
// kundan

console.log(+true);
// 1
console.log(!"xyz");
// false

function curryFuction(a){
   return function(b){
      // const mult = a*b;
      return function(c){
         return result = a*b*c;
      }
   }
}

console.log(curryFuction(2)(3)(5));
// 30

const str1 = "Hello"
const str2 = "world 1234"

function mergeTwostring(){
   let res = '';
   let m;
   for(let i=0; i<str1.length && i<str2.length; i++){
      res += str1.charAt(i);
      res += str2.charAt(i);
      m = i+1;
      // console.log(m)
   }

   while(m<str1.length || m<str2.length){
      if(m < str1.length && m !== str1.length){
         res += str1[m];
         m++;
      } else{
         res +=str2[m];
         m++;
      }
   }

   console.log(res);
}

mergeTwostring();

// sum(2,4)
// sum(2)(4)

function sum(a, b){
   if(typeof a === 'number' && typeof b === 'number'){
      return a+b;
   }

   if(typeof a=== 'number' && typeof b === 'undefined'){
      return function(b){
         return a+b;
      }
   } 
}

const numArr = [[1,2], [3,4], [5,6, [7, 8]]];

const flat = numArr.flat(2);
console.log(flat); 