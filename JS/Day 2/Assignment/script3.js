let userName = prompt("Enter user name ");
let pass = prompt("Enter password ");
let email = prompt("Enter email ID");

let result = function validator(userName, pass, email) {

    let updatedUserName = userName.split(" ").join("").toLowerCase();
    let updatedEmail = email.toLowerCase();
    let isGmail = updatedEmail.includes("@gmail.com");

    let stongPass = false ;
    let passLength = pass.length ;
    let passContains = pass.includes("@") ||   pass.includes("*") ||  pass.includes("/");

    if (passLength > 8 && passContains ){
        stongPass= true ;
    }
   

    return {
        userName: updatedUserName,
        password: pass,
        email: updatedEmail ,
        stongPassword : stongPass ,
        isGmail: isGmail
    };
};

let output = result(userName, pass, email);
console.log(output);