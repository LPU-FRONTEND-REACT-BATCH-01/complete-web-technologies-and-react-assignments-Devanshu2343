import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("");
  let handleChildData = (value) => {
    setData(value);
    console.log();
  };
  return (
    <div>
      Parent
      <h1>{data}</h1>
      <Child fun={handleChildData} data="This is data frpm parent to child" />
    </div>
  );
};

export default Parent;
