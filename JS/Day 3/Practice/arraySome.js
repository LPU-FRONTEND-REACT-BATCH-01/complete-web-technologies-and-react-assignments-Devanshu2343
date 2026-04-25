

// let arr = ["Apple" , "Orange" , "Kiwi"]

// let result = arr.some(ele => ele === 'Apple')
// console.log(result);

let users = [
    {
        id : 1 ,
        username : "devanshu1010" ,
        password : "QWERTY"
    } , 
    {
        id : 2 ,
        username : "abhi" ,
        password : "QWERTY1"

    } ,
    {
        id : 3 ,
        username : "sama" ,
        password : "QWERTY22"
    }
    
]

let inputData = {
    userName :"devanshu1010" ,
    password : "QWERTY1"
}

let results = users.some(ele => ele.username === inputData.userName)

let passValidator = false ;
if (results === true){
    passValidator = users.some(ele =>  ele.username === inputData.userName &&  ele.password === inputData.password
    );
}


if (results === false){
    console.log("Incorrect username ! Return to homepage");
    
}
else if  (results === true && passValidator === false){
    console.log("Incorrect Password");
    
}
else if (results === true && passValidator === true){
    console.log("Login Successful");
    
}
else{
    console.log("Input Error !! ");
    
}
