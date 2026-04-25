// import React, { useState } from "react";

// const ShowHide = () => {
//   const [visible, setVisible] = useState(true);

//   const toggleText = () => {
//     setVisible((prev) => !prev);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Show / Hide Text</h2>

//       <button
//         onClick={toggleText}
//         style={{
//           backgroundColor: visible ? "red" : "green",
//           color: "white",
//           padding: "8px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {visible ? "Hide" : "Show"}
//       </button>

//       <br />
//       <br />

//       {visible && <p>This text can be toggled</p>}
//     </div>
//   );
// };

// export default ShowHide;

import React, { useState } from "react";

const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  const toggleText = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleText}>{visible ? "Hide" : "Show"}</button>

      <p
        style={{
          display: visible ? "block" : "none",
        }}
      >
        This text can be toggled
      </p>
    </div>
  );
};

export default ShowHide;
