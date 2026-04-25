import axios from "axios";
import React, { useEffect, useEffectEvent, useState } from "react";
import ProductCards from "../Components/ProductCards";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setData(res.data.products)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      {data.map((product)=><ProductCards key={product.id} data = {product} />)}
    </div>
  );
};

export default Products;
