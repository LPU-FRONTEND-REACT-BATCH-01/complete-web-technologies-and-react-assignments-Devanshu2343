let price = prompt ("Enter the price of the product") ;
console.log("Price entered :: " + price);
let finalPrice = 0 ;



let total_amount = function calulateDiscount (price) {
    
    if (price > 2000 && price< 6000){
        finalPrice =price - (0.15 * price);
         return "You got discount of 15% and your final price is " + finalPrice;


    }
    else if (price > 6000){
        finalPrice = price - (0.25 * price);
        return "You got discount of 25% and your final price is " + finalPrice;
        

    }
    else {
        console.log("No Offer");
        
    }
    
}

if (price < 1000){
    console.log("No discount price is 1000");
    
}
else {
    console.log(total_amount(price));
}
