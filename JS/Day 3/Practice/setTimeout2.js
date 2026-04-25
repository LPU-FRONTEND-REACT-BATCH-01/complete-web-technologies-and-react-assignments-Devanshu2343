

function pourOil(callback){
    setTimeout(()=>{
    console.log("Oil Poured");
    callback();
    
},3000);
}

function fryOnions(callback){
    setTimeout(()=>{
    console.log("Fried Onions");
    callback();
},5000);
}

function addSpices(callback){
    setTimeout(()=>{
    console.log("Spieces Added");
    callback() ;
},1000);
}

function addRice(){
    setTimeout(()=>{
    console.log("Rice Added");
    
},4000);
}

addSpices(()=>{
    pourOil(()=>{
        fryOnions(()=>{
            addRice()
        })
    })
})