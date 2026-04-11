 let parentContainer = document.querySelector(".parent-container")

 
 let fetchData = async () =>{

    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data);
    displayData (data.products)
    


 }
 

 let displayData = (data => {

    data.map((product)=>{
        let conatainer = document.createElement("ul")
        let title = document.createElement("li")
        let price = document.createElement("li")

        title.textContent= product.title
        price.textContent = product.price

        conatainer.append(title ,price)

        parentContainer.append(conatainer)
    })
 })
 
 fetchData()
 
 
 
 
 
 
 
 
 
 
 
 
 