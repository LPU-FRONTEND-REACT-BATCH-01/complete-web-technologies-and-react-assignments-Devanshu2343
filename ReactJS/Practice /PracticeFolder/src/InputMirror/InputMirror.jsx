import React from "react";
import { useState } from "react";

const InputMirror = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h2>Input Mirror</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type Here"
      />
      <p>Typed Content :: {input}</p>
      <p>Length: {input.length}</p>
      <p>Uppercase: {input.toUpperCase()}</p>
    </>
  );
};

export default InputMirror;
