

const Day1App = () => {
  return <h1>This is Day1 App</h1>;
};

export default Day1App;
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   let names=useSelector((state)=>state.cart)
//   let dispatch=useDispatch()
//   let finalTotal=names.reduce((total,item)=>total+item.price * item.quantity,0)
//   let SUBTOTAL=finalTotal.toFixed(0)
//   return (
//     <div>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Redux</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <Link class="nav-link active" aria-current="page" to="/">Home</Link>
//           </li>
//           <li class="nav-item">
//             <Link class="nav-link" to="cart">Cart</Link>
//           </li>
//           <li class="nav-item">
//           <Link class="nav-link" to="cart">TOTAL ITEMS{names.length}</Link>
//         </li>
//         <li class="nav-item">
//         <Link class="nav-link" to="cart">TOTALPRICE{SUBTOTAL}</Link>
//       </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//     </div>
//   )
// }

// export default Navbar
