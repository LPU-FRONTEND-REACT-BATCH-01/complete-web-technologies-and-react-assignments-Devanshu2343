async function fetchData() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        console.log(res);

        if (res.ok){
             let data = await res.json();
             console.log(data.products);   
             


        }
        else{
            console.log("There is an HTTP Error");
            
        }
             
        
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();