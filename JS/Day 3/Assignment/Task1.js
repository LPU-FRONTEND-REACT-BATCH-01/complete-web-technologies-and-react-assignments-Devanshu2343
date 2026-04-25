let carData = [
    {
        id: 1,
        name: "watch",
        price: 1999,
        quantity: 2
    },
    {
        id: 2,
        name: "shoes",
        price: 199,
        quantity: 4
    },
    {
        id: 3,
        name: "phone",
        price: 19999,
        quantity: 1
    },
    {
        id: 4,
        name: "laptop",
        price: 55999,
        quantity: 1
    },
    {
        id: 5,
        name: "headphones",
        price: 2999,
        quantity: 3
    },
    {
        id: 6,
        name: "keyboard",
        price: 999,
        quantity: 2
    },
    {
        id: 7,
        name: "mouse",
        price: 499,
        quantity: 5
    },
    {
        id: 8,
        name: "bag",
        price: 1499,
        quantity: 2
    },
    {
        id: 9,
        name: "tablet",
        price: 25999,
        quantity: 1
    },
    {
        id: 10,
        name: "camera",
        price: 45999,
        quantity: 1
    }
];




carData.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log("Sorted by name:", carData);



let arr = [...carData]; 
arr.sort((a, b) => {
    return a.price - b.price;
});

console.log("Sorted by price:", arr);



let filteredData = carData.filter((e) => {
    return e.price > 2000;
});

console.log("Filtered data:", filteredData);