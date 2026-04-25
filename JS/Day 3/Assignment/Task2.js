let users = [
    {
        id: 1,
        username: "devanshu1010",
        password: "QWERTY"
    },
    {
        id: 2,
        username: "abhi",
        password: "QWERTY1"
    },
    {
        id: 3,
        username: "sama",
        password: "QWERTY22"
    }
];

let inputData = {
    userName: "devanshu1010",
    password: "QWERTY1"
};


let user = users.find(ele => ele.username === inputData.userName);

if (!user) {
    console.log("Incorrect username ! Return to homepage");
}
else if (user.password !== inputData.password) {
    console.log("Incorrect Password");
}
else {
    console.log("Login Successful");
}