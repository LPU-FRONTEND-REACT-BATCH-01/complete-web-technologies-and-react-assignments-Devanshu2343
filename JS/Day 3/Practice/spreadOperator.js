// let original_Object = {
//     id : 1,
//     name : "Nick" ,
//     city : "Pune"
//}

// let duplicate_Object = structuredClone(original_Object)

// original_Object.state = "Maharastra"


// let duplicate = {...original_Object}
// let duplicate2 = {...original_Object , state = "Maharastra"}


// console.log(original_Object);
// console.log(duplicate_Object);


let arr = [1,2,3,45,5,78,79,775,4]

let duplicate = {...arr}

let duplicate2 = [...arr,7 , 78] ;

arr.push= "Hello"

console.log(duplicate);
console.log(arr);
console.log(...arr);


