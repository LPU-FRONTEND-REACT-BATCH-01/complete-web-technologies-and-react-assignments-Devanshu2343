// let ul = document.querySelector(".fruits");

// let li = document.createElement("li");
// li.textContent = "Guava"; 

// ul.appendChild(li); 


let ul = document.querySelector(".fruits");

let watermelon = document.createElement("li");
watermelon.textContent = "Watermelon";
watermelon.classList.add("items"); // same class as others

ul.appendChild(watermelon);


let button = document.querySelector("button")

button.addEventListener('mouseover' , ()=>{
    console.log("This button got clicked");
    
})
