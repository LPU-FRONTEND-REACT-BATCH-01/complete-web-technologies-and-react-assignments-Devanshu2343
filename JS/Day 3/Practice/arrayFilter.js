//filter

let arr = [1,45,6,23,8,6,89,76,43,23,23]

let filtered_array = arr.filter((ele)=>{
    return ele>20 
});

console.log(filtered_array);

let temp = [];  

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 20){
        temp.push(arr[index]);
    }
}

console.log(temp);