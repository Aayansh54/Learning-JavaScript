let variable = true
console.log(typeof variable)

let variableChange = String(variable)

console.log(variableChange)
console.log(typeof variableChange)


/*
    when changing to data type to number

    "67" becomes 67
    "67abc" becomes NaN
    undefined also becomes NaN
    true becomes 1 and false 0
*/

/* when changing to string
    number stays the same
    undefined -> undefined
    boolean -> boolean
*/
// almost all are perdictable