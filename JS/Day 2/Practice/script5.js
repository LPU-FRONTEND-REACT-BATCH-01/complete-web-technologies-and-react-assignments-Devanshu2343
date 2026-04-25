// let temp =0  ;

// function add (){
//     let a = 20 , b =30 
//     return a+ b ;
// }

// let result = add () ;
// console.log(result);

let temp = 0 ;

function calculator (a, b , operation){
    return operation(a,b) ;
}

function add (a_from_calculator , b_from_calculator){
    return a_from_calculator + b_from_calculator;
}

let result = calculator(10,20,add);
console.log(result);




    
