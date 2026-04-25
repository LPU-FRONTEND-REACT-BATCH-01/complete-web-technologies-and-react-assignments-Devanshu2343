// import { useState } from "react";

// const BackgroundToggle = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <div className={theme === "light" ? "light-mode" : "dark-mode"}>
//       <h1>Theme Toggle</h1>
//       <button onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"}
//       </button>
//     </div>
//   );
// };

// export default BackgroundToggle;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const BackgroundToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={toggleTheme}>
        Toggle Theme To {theme === "light" ? "dark" : "light"} from{" "}
        {theme === "light" ? "light" : "dark"}
      </button>
    </>
  );
};

export default BackgroundToggle;
