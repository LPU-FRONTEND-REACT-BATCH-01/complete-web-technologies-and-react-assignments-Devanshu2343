// setTimeout(()=>{
//     console.log("A");
    
// },3000);

// setTimeout(()=>{
//     console.log("B");
    
// },500) ;

// setTimeout(()=>{
//     console.log("C");
    
// },2000);

function pourOil(){
    setTimeout(()=>{
    console.log("Oil Poured");
    
},3000);
}

function fryOnions(){
    setTimeout(()=>{
    console.log("Fried Onions");
    
},5000);
}

function addSpices(){
    setTimeout(()=>{
    console.log("Spieces Added");
    
},1000);
}

function addRice(){
    setTimeout(()=>{
    console.log("Rice Added");
    
},4000);
}

addRice();
addSpices();
fryOnions();
pourOil();

// here we can not control order of execution