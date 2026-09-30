
const nam = "John"
console.log(nam)

const surname = new String("pork")
console.log(surname)

console.log(nam.charAt(0))
console.log(nam[0]);
console.log(nam[-1])//undefined
console.log(nam.charAt(-1))//empty string

console.log(nam.indexOf("ay"))//first occurence of substring



// console.log(nam + surname) bad way
console.log(`My name is ${nam} ${surname}`)

console.log(surname.toUpperCase()) //makes all char uppercase
console.log(nam.toLowerCase())

const whitespace = "    kya re    !  "
console.log(whitespace)
console.log(whitespace.trim())

console.log(surname.replace("k",'K'))

console.log(whitespace.replace(whitespace.slice(10,15),""))