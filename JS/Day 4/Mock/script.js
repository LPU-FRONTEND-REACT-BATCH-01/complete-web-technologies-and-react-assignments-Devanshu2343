let account = {
    balance : 0 ,
    transactions : []
}


function deposit(amount ) {
    if (amount <= 0){
        console.log("Ammount should be greater than Zero ");  
        return ;
    }
    else{
        account.balance += amount ;
        account.transactions.push("Deposited : " + amount );
        console.log("Deposited : " + amount);
        
    }  
}

function withdraw (amount){
    if (amount <= 0){
        console.log("Ammount should be greater than Zero ");  
        return ;
    }
    else if (amount > account.balance){
        console.log("Ammount must be less than total amount ");
        return ;
        
    } 
    else if ( amount > 10000){
        console.log("You can not withdraw more than 10000");
        return ;
        
    }
    else if (( account.balance - amount) <500){
        console.log("You are below minimum balance ");
        
    }
    else {
        account.balance -= amount ;

        account.transactions.push("Withdrawn :" + amount);
    }
  
    console.log("Withdrawn :" + amount);
    

}

function getBalance() {
    return "Balance : " + account.balance;
}

function getTransaction(){
    // return account.transactions;
    let arrAmount = account.transactions.map((value)=>{
        console.log(value);
        
        
    })
}

deposit(2000);
withdraw(500);
deposit(1000);
withdraw(0);
withdraw(30000000);
deposit(-9);

deposit(2000);
withdraw(2500);


console.log(getBalance());
console.log(getTransaction());

