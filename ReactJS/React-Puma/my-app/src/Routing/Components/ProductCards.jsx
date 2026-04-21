import React from "react";
import { Link } from "react-router";

// const ProductCards = ({data}) => {
//   return (
//     <div>
//         <h3>{data.id}</h3>
//         <h3>{data.title}</h3>
//     </div>
//   )
// }

const ProductCards = ({ data }) => {
  return (
    <div className="products-card">
      <div className="prod-image">
        <img src={data.images[0]} alt="" />
      </div>

      <h3>{data.id}</h3>
      <h3>{data.title}</h3>
      <p>{data.price}</p>
      <Link to={`${data.id}`}>
        <button>View More</button>
      </Link>
    </div>
  );
};

export default ProductCards;
