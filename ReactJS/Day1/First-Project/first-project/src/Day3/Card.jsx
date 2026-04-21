const Card = ({ data }) => {
  return (
    <div>
     
      <h3>{data.title}</h3>
      <p>₹{data.price}</p>
    </div>
  );
};

export default Card;