let obj = {
    name : "Dev" ,
    age : 21
}
console.log(obj);


let userData = {
    id : 1 ,
    name : "Chota Bheem" ,
    age : 12 ,
    address : "Dholakpur"
}

console.log(userData);
console.log(userData.id);
console.log(userData.name);
console.log(userData.age);
console.log(userData.address);

Object.freeze(userData);
Object.seal(userData);

userData.pincode = 1212112 ;
console.log(userData);

let keys = Object.keys(userData);
console.log(keys);

let values = Object.values(userData);
console.log(values);

let pairs = Object.entries(userData);
console.log(pairs);






