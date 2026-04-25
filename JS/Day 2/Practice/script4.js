//IIFE -> used to fetch data immediately (Immediately Invoked Function Expression )
// (function fetchData (){
//     console.log("Data Fetched");
    
// })

//arrow function 

// let arrow = (name) => {
//     return "Hello " + name;
// };

// let result = arrow("NICK") ;
// console.log(result);


// // shorter form

// let arrow1 = name => "Hello " + name;
// console.log(arrow1("Devanshu"));

//higher order function

function calclator(a , b , operation) {
    return operation(a,b) ;
}

let add = (a,b) => {
    return a + b ;
}

let results2 = calclator (10,20,add);
console.log(results2);


let results = add(12,32) ;
console.log(results);
