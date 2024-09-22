# Javascript Tutorial

```javascript
console.log('Welcome Javascript')
```

## What is Javascript?
- It's is a prototype based language
- It's is Dynamically typed language
- Javascripts contains classes and objects
- Javascript is both client-side and server-side scripting language

## variables in JS
- var
- let
- const

### Var variable
* var is a function scoped element
* var can be used before intialization
* var can be reassigned in any scope

### Let variable
* let is a blocked scoped element
* let cannot be used before intialization
* let cannot be redeclare in same scope
* let varaible can be reassigned


### Const variable
* const is a blocked scoped element
* const variable should be assigned when decelared
* const variable can be reassigned
* const variable cannot be redeclared

## Datatypes in JS
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

## Array in javascript
- Array stores collection of elements
- Array elements are accesced using index
- Index of first element in an array is 0
- Array can stores element of different types

> How to define an array
```javascript
let newArray = [1, 2, 3, 4, 5];
let newArray = new Array(size);
```

> Array properties and methods

| Methods | Description |
| ------- | ----------- |
| length  | Returns the length of the array |
| push()  | Add element to the end of array |
| pop()   | Removes last element of an array |
| shift() | remove first element of an array and rest elements to lower index |
| unshift() | Adds element to 0th index by shifting the element to higher index |
| join(param) | joins all array elements into a string and takes a seperator as input |
| concat() | this method is used to concat array elements |
| slice(beg idx, end idx) | - slices out a piece of an array <br> - this method creates a new array <br> - It doesn't make change into orignal array <br> - It explicitly take index |
| splice(param1, param2, ...param3) | it is also used to remove and add elements into array <br> - It make changes into original array <br> - First parameter defines the position where new element should be add in <br> - second parameter defines how many times elements should be removed <br> - The rest parameters define the new elements to be added |
| includes(val) | it checks whether an element is present in an array or not <br> - It returns boolean value ie. True or False |
| indexOf(val) | it returns the index of an element | 
| forEach(callback) | this method is used to loop through each element of an array <br> - this method doesn't return |
| map(callback) | this method is ued to loop through each element and make changes <br> - It return a new array of the same length as of original |


* length property - Returns the length of the array
```javascript
let array = [1, 2, 3, 4, 5];

console.log(array.length);
// Output: 5
```

* Push() method - Add element to the end of array
```javascript
let array = [1, 2, 3, 4, 5];

console.log(array.push(6));
console.log(array)
// Output: [1, 2, 3, 4, 5, 6]
```

* Pop() method - Removes last element of an array
```javascript
let array = [1, 2, 3, 4, 5, 6];

console.log(array.pop());
console.log(array);
// Output: [1, 2, 3, 4, 5]
```

* Shift() method - remove first element of an array and rest elements to lower index
```javascript
let array = [1, 2, 3, 4, 5, 6];
array.shift();

console.log(array);
// Output: [2, 3, 4, 5, 6];
```

* Unshift(val) method - Adds element to 0th index by shifting the element to higher index
```javascript
let array = [2, 3, 4, 5, 6];
array.unshift(1);

console.log(array);
// Output: [1, 2, 3, 4, 5, 6]
```

* Join(seperator) method - joins all array elements into a string and takes a seperator as input
```javascript
let array = [1, 2, 3, 4, 5, 6];

console.log(array.join(*));
// Output: 1*2*3*4*5*6
```

* Concat() method - this method is used to concat array elements
```javascript
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8];

const concatArray = array1.concat(array2);
console.log(concatArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

* Slice(beg idx, end idx) - slices out a piece of an array
* this method creates a new array
* It doesn't make change into orignal array
* It explicitly take index

```javascript
const array = [1, 2, 3, 4, 5, 6];
const spliceArray = array.splice(0, 2);

console.log(spliceArray);
// Output: [1, 2]
```

* Splice(param1, param2, ...param3) method - it is also used to remove and add elements into array
* It make changes into original array
* First parameter defines the position where new element should be add in
* second parameter defines how many times elements should be removed
* The rest parameters define the new elements to be added

```javascript
const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 7, 8);

console.log(array);
// Output: 1, 2, 7, 8, 4, 5
```

* includes(val) method - it checks whether an element is present in an array or not
* It returns boolean value ie. True or False
```javascript
const array = [1, 2, 3, 4, 5, 6];

console.log(array.includes(6));
// Output: true
```

* indexOf(val) method - it returns the index of an element
```javascript
const array = [1, 2, 3, 4, 5, 6];

console.log(array.indexOf(6));
//Output: 5
```

* forEach() method - this method is used to loop through each element of an array
* this method doesn't return 
```javascript
const array = [1, 2, 3, 4, 5, 6];
array.forEach((arr) => {
   console.log(arr * 2);
});
//output: 2 4 6 8 10 12
```

* Map() method - this method is ued to loop through each element and make changes
* It return a new array of the same length as of original
```javascript
const array = [1, 2, 3, 4, 5, 6];
const newArr = array.map((arr) => {
   return arr * 2;
});

console.log(newArr);
//Output: [2, 4, 6, 8, 10, 12]
```


### Array object in javascript
* Array object is used to create array object in javascript
* Array object as various methods

> Array object methods

| Methods | Description |
| ------- | ----------- |
| isArray() | this method check if an element is an array or not. <br> - this object returns boolean value ie. True or False |
| from(param) | It is used to create an array |
| of() | It is used to create an array form multiple values |

* isArray() method - this method check if an element is an array or not.
* this object returns boolean value ie. True or False
```javascript
const arr = [1, 2, 3, 4, 5, 6];

console.log(Array.isArray(arr));
// Output: true
```

* from() method - It is used to create an array
```javascript
const name = 'kundan';

const newArr = Array.from(name);
console.log(newArr);
//Output: ['k', 'u', 'n', 'd', 'a', 'n']
```

* of() method - It is used to create an array form multiple values
```javascript
const val1 = 1;
const val2 = 2;
const val3 = 3;

const newArray = Array.of(val1, val2, val3);
console.log(newArray);
// Output: [1, 2, 3]
```


## Objects in Javascript
- Objects are used to store properties and methods
- methods are functions stored as properties
- Properties are accesed using keys
- In Javascript, almost every thing is object

> How to define objects in JS
> Objects are created using object literals ie. {}
> Object are also created using new keyword
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

const obj = new Object();
console.log(obj);
// Output: {}
```

> Ways to access to property of object

* Using .(dot) 
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

console.log(obj.name);
// Output: javascript
```

* Using ['key'] method
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

console.log(obj['name']);
// Output: javascript
```

> Object methods in javascript

| Methods | Description |
| ------- | ----------- |
| length | returns length of an object |
| entries() | - this method allows us to access the property of objects <br> - this method returns array |
| keys() | - this method returns the keys of an object <br> - this method returns array of keys |
| values() | - this method returns the values of an object <br> - this method returns array of values |
| assign(target, ...source) | this method is used to copy properties from one or more source object to a target object | 
| fromEntries() | this method creates objects form array of entries |
| freeze() | - this method is used to freeze an object <br> - we can't make changes into an object|

* Entries() method - this method allows us to access the property of objects
* returns arrays
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

console.log(Object.entries(obj));
// Output: [ [ 'name', 'javascript' ], [ 'version', 'ECMAScript 2023' ] ]
```

* Keys() method - this method returns the keys of an object
* this method returns array of keys
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

console.log(Object.keys(obj));
// Output: ["name", "version"]
```

* values() method - this method returns the values of an object
* this method returns array of values
```javascript
const obj = {
    name: 'javascript',
    version: 'ECMAScript 2023',
};

console.log(Object.values(obj));
// Output: ["name", "version"]
```

* Assign(target, ...source) method - this method is used to copy properties from one or more source object to a target object
```javascript
const obj1 = {
    name: 'javascript',
};

const obj2 = {
    version: 'ECMAScript 2023',
};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj);
// Output: {name: 'javascript', version: 'ECMAScript 2023'}
```

* fromEntries() method - this method creates objects form array of entries
```javascript
const Entries = [
    ["name", 'Javascript'],
    ["version", 'ECMAScript 2023']
];

const obj = Object.fromEntries(Entries);
console.log(obj);
// Output: { name: 'Javascript', version: 'ECMAScript 2023' }
```

* freeze() method - this method is used to freeze an object
* ie we can't make changes into an object
```javascript
const obj = {
    name: 'Javascript',
    version: 'ECMAScript 2023'
};

Object.freeze(obj);
```