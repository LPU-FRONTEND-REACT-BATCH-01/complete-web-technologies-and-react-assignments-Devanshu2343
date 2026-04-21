import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category = () => {
  const paramData = useParams();
  console.log(paramData);

  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get(
          `https://dummyjson.com/products/category/${paramData.category}`,
        );
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  });
  return <div>Category</div>;
};

export default Category;
