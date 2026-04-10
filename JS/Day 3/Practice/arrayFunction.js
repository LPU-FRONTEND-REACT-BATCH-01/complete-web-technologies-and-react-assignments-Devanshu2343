let arr= ["Nick" , "Ravi" , "Jasmine", "Jaggu"]

//map 
arr.map((value , index)=>{
    console.log(value, index);
    
})


//reduce
let arr1= [1,2,3,4,5,6,7,8,9,10]

let result = arr1.reduce((previous , current)=> {
    return previous+current ;
});

console.log(result);




let carData =[
            {
            id:1,
            name: "watch" ,
            price : 1999 ,
            quantity :2 
            },
            {
            id:2,
            name: "shoes" ,
            price : 199 ,
            quantity :4
            },
            {
            id:3,
            name: "phone" ,
            price : 19999 ,
            quantity :1
            }

        ]

      let totalCartValue = carData.reduce((initialPrice , currentPrice)=>{
          return initialPrice + currentPrice.price * currentPrice.quantity ;
      },0 );

      console.log(totalCartValue);
      