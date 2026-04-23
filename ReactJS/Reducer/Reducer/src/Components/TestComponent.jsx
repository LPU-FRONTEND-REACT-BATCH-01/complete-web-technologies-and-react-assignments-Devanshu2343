import React, { useContext } from "react";
import { CounterContext } from "./CounterContextProvider";

const TestComponent = () => {
  // Access context data
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
};

export default TestComponent;
