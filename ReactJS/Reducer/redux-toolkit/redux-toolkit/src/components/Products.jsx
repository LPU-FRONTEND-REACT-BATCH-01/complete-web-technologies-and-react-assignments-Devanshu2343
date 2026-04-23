import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../RTK/cartSlice";

const Products = () => {
  const cartItems = useSelector((state) => state.cart.products);
  console.log(cartItems);

  const dispatch = useDispatch();

  let product1 = {
    id: 1,
    name: "Laptop",
    price: 30000,
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product1))}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Products;
