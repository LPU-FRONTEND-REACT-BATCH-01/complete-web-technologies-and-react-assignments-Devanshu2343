import React from "react";
import { useState } from "react";

const DynamicGreeting = () => {
  const [inputVal, setInputVal] = useState("");

  const handleInputVal = (e) => {
    setInputVal(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputVal}
        onChange={handleInputVal}
      />

      <div>Hello {inputVal} </div>
    </>
  );
};

export default DynamicGreeting;
