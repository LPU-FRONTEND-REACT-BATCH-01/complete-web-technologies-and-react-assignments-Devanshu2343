import React from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [state, setState] = useState("ON");

  const handleState = () => {
    setState(state === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      ToggleButton
      <br />
      <button onClick={handleState}>Switch == {state}</button>
    </div>
  );
};

export default ToggleButton;
