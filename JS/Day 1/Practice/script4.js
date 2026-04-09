let a = 10 ;
console.log(typeof a);

let b = 20n ;
console.log(typeof b);

let c = 'Hello' ;
console.log(typeof c);

let d = null ;
console.log(typeof d);

let e = true ;
console.log(typeof e);

let f = undefined ;
console.log(typeof f);

let g = '*' ;
console.log(typeof g);

let h ;
console.log(typeof h);

let arr= [1,2,3,4] ;
console.log(typeof arr);

function test(){
// only function of non primitive data type gives function as output for type of var_name where as any other will give output as object
}

console.log(typeof test);

console.log(2 == '2');

console.log(2 === '2');

let aa = 2  + '2' ;
console.log( aa)
console.log( typeof aa); //-> string due to type cohersion



