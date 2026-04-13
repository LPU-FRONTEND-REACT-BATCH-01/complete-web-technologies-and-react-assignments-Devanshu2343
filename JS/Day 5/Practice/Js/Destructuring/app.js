// let arr = [21,2324,655,34,22,56,6]

// let a = arr[0]

// console.log(a);

// let [a,b,c] = arr ;
// console.log(a ,b);

let users = {
    id : 1 ,
    name : "Nick" ,
    userLocation : {
        city : "Jalandhar" ,
        state : "Punjab"
    },
    phone :"2323232323" ,
    skills :{
        frontend : ["react" , "HTML" , "CSS"] ,
        backend : ["Java" , "SpringBoot"]

    }
}




// let { id, name: username, userLocation: { city, state } } = users;

// console.log(id, username, city);

// let {city , state } = users.userLocation ;

// console.log(city ,state);

let {id , name , userLocation: {city , state} , phone ,skills: {frontend ,backend}} = users ;

console.log(id , frontend[0]);


