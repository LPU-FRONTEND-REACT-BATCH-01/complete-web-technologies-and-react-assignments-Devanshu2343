import React from "react";
import { NavLink } from "react-router";

const ProductsNav = () => {
  return (
    <div className="prod-nav">
      <NavLink to={"beauty"}>
        <div className="men-card card">
          <h1>BEAUTY</h1>
        </div>
      </NavLink>
      <NavLink to={"fragrances"}>
        <div className="women-card card">
          <h1>FRAGRANCES</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductsNav;
