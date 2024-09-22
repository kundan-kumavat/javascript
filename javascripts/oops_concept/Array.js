const myArr =[]
// %DebugPrint(myArr)

//continous, holey

// SMI(small integer)
//Packed element
// Double(float, string, function)

const arrTow =[1, 2,3,4 ,5]
//Packed_SMI_ELements

arrTow.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTow.push('7')
// PACKED_ELEMENTS

arrTow[10] = 11
//Holey_Elements

console.log(arrTow)
console.log(arrTow.length)
console.log(arrTow[9])

// bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 9)
//hasOwnProperty(Object.prototype, 10)

//holes are very expensive in js

const arrThree = [1,2,3,4,5]

// Optimization
//SMI > DOUBLE > PACKED
//H-SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') //PACKED_ELEMENT
arrFive.push('2') //PACKED_ELEMENT
arrFive.push('3') //PACKED_ELEMENT

const arrSix = [1,2,3,4,5]
arrSix.push(NaN)// PACKED_DOUBLE

// for, for-of, forEach