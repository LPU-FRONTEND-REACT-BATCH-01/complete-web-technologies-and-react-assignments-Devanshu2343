import React from "react";

const Child = (data, fun) => {
  let childData = "This data is from child to Parent";
  fun(childData);

  return (
    <div>
      Child
      {data}
    </div>
  );
};

export default Child;
