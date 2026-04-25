import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  let handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <CounterContext.Provider
        value={{
          count: count,
          increment: handleIncrement,
          decrement: handleDecrement,
        }}
      >
        {children}

        {}
      </CounterContext.Provider>
    </>
  );
};

export default CounterContextProvider;
