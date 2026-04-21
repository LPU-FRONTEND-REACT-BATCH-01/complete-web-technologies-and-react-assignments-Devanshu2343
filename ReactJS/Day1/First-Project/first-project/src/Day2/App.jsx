import React, { useEffect } from "react";
import { useState } from "react"; 


// const App = () => {


//   const [state , setState] = useState (0) ;

//   let normal = 0 ;


//   let handleNormal = () => {
//     normal = 10 ;
//   }


//   let handleState =() => {
//     setState(20 ) ;
//   }



//   return (
//     <div>
//       <h1>This is state variable {state} </h1>
//       <h1>This is normal Variable {normal}</h1>

//       <button onClick={handleNormal}> Normal</button>
//       <button onClick={handleState}> State</button>
//     </div>
//   )

// }



// const App = () =>{

//   let [state , setState] = useState(0) ;

//   let handleIncrement =() => {
//      setState(state+1);

//   }

//   let handleDecrement = () =>{
//     setState (state-1) ;
//   }

//   console.log("Executed");

//     return (
//     <div>
//       <h1>This is state variable {state} </h1>
     

//       <button onClick={handleDecrement}> Decrement</button>
//       <button onClick={handleIncrement}> Increment</button>
//     </div>
//   )


// }


// const App =() =>{

//   // const [show , setShow] = useState("password") 

//   // let handleShow =() =>{
//   //   setShow("text") ;
//   // }




//   // let handleShowPass = () =>{
//   //   setShow("password") ;
//   // }

//   const [show ,setShow ] = useState (true) ;
  

//   let toggleShow =() =>{
//     setShow(!show);
//   }


//   return(
//     <div>
//       {/* <input type={show } /> */}
//       {/* <button onClick={handleShow}>Show</button>
//       <button onClick={handleShowPass}>Hide</button> */}


      
//       <input type={show ? "text" : "password"} />
//       <button onClick={ toggleShow }>{show ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}</button>
//       {/* <button onClick={toggleShow}><i class="fa-solid fa-eye"></i></button> */}
//     </div>
//   )
// }


// const App = () => {


//   const [bulb ,setBulb ] = useState (false) ;

//   let handleState = () =>{
//     setBulb(!bulb);
//   }

//   return (
//     <div>


//      <img src={bulb ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif"} alt="" />


//     <button onClick={handleState}> {bulb ? "OFF" : "ON"}</button>
//     </div>
//   )

// }

// conditional Rendering

// const App = () =>{
//   let isError= true ;

//   return(
//     <div>
//       <h1>This is using ternary operator</h1>

//       {isError ? <p>Error</p> : <p>No error </p>}
//     </div>
//   )


// }


//-> USE EFFECT

// const App = () =>{
//   useEffect (()=>{
//     console.log("Use effect got executed");
    
//   })

//   const [count , setCount] = useState(0);

//   let handleCount = () =>{
//     setCount(prev => prev+1

//     )

//   }

//   console.log("Cpmonent Rendered");
 
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleCount}>Click</button>


//     </div>
//   )
// }

const Day2App = () =>{
  useEffect (()=>{
    console.log("Use effect got executed");
    
  })

  const [count , setCount] = useState(0);
  const [count1 , setCount1] = useState(5) ;

  let handleCount = () =>{
    setCount(prev => prev+1
      
    )

  }
  let handleCount2 = () =>{
    setCount1(prev=> prev+1);
  }

  console.log("Component Rendered");

    // Runs only once
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // Runs when count1 changes
  useEffect(() => {
    console.log("Count1 updated:", count1);
  }, [count1]);

  // Runs when count1 and count changes
  useEffect(() => {

    console.log("Count updated:", count);
    console.log("Count1 updated:", count1);
  }, [count ,count1]);

  
  
 
  return (
    <div>
      <h1>{count}</h1>
      <h1>This is count1 : {count1}</h1>
      <button onClick={handleCount}>Click</button>

      <button onClick={handleCount2} >Click here for 2nd</button>


    </div>
  )
}

export default Day2App;