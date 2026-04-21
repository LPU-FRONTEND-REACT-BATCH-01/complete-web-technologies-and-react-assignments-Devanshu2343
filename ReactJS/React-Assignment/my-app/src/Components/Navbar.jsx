import React from "react";
import Landing from "../Pages/Landing";
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import Cart from "../Pages/Cart";

const Navbar = () => {
  return (
    <div>
      <Link to={Landing}>Landing</Link>
      <Link to={Men}>Men</Link>
      <Link to={Women}>Women</Link>
      <Link to={Cart}>Cart</Link>
    </div>
  );
};

export default Navbar;
