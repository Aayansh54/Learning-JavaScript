"use strict";//treat all JS code as new version

// number => range = 2^53
// bigint
// string
// boolean
// null => standalone value
// undefined 
// symbol

//object





/*PRIMITIVE DATATYPE(7)

    string
    number 100,100.23
    boolean true false
    null
    undefined
    symbol
    big int
*/

/*REFERENCE(NON PRIMITIVE)
    Arrays
    Objects
    Functions
 */

console.log("****PRIMITIVE****");

let age = 18

console.log("typeof any number is",typeof(age))
console.log("typeof undefined is",typeof(undefined))
console.log("typeof null is",typeof(null))

let name = "Aayansh"
console.log("typeof string is",typeof name);

let eighteenPlus = false
console.log("typeof boolean is",typeof eighteenPlus);


const mysymbol  = Symbol('123')
console.log("typeof symbol is","typeof symbol is",typeof mysymbol);

const bigINT = 11111111111111111n
console.log("typeof bigInt is",typeof bigINT);//bigint

console.log("****Primitive****");

let myArray = [12,32,12]
console.log("typeof array is",typeof myArray);//object

let myObj = {
    name:"Aayansh",
    age:"19"
}
console.log("typeof object is",typeof myObj);//object

let myfunction = function(){
    console.log("hello world")
}
console.log(myfunction);
console.log("typeof function is",typeof myfunction);//function
