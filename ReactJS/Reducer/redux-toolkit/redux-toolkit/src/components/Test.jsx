import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, change } from "../RTK/counterSlice";

const Test = () => {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.counter.name);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button onClick={() => dispatch(reset())}>Reset</button>

      <h1>{name}</h1>

      <button onClick={() => dispatch(change("Updated State"))}>
        Change State
      </button>
    </div>
  );
};

export default Test;
