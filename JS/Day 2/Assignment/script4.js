function createUser(username, email, pass) {
    return {
        username: username,
        email: email,
        password: pass
    };
}


let username = prompt("Enter username") ;
let email = prompt ("enter email") ;
let paass = prompt ("enter pass") ;

let user1  = createUser(username, email ,paass) ;
console.log(user1);
