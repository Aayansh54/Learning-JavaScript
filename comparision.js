//for same datatypes all comparison are same as other lang
console.log(2 > 1);
console.log("hello" > 'Hi');

//different datatype show unpredectible results

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//>,<,>=,<= convert the null to number ... while == doesnt (please avoid)

console.log("2" == 2);//converts the datatype

console.log(("2") === 2);//false,datatype different(doesnt convert);

