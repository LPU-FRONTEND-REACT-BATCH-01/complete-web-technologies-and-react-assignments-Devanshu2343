import React from "react";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  let handleClick = () => {
    navigate("/profile");
  };

  return (
    <div>
      Landing
      <button onClick={handleClick}> Click to visit Cart </button>
    </div>
  );
};

export default Landing;
