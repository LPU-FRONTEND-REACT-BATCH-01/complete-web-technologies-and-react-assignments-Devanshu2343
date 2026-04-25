// import React from "react";
// import CounterContextProvider from "./Components/CounterContextProvider";
// import AppRouter from "./Components/AppRouter";

// const App = () => {
//   return (
//     <>
//       <CounterContextProvider>
//         <AppRouter />
//       </CounterContextProvider>
//     </>
//   );
// };

// export default App;

// import React, { useReducer } from "react";

// const App = () => {
//   function reducer(state, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;

//       case "DECREMENT":
//         return state - 1;

//       default:
//         return state;
//     }
//   }

//   const [current_state, dispatch] = useReducer(reducer, 10);

//   return (
//     <div>
//       <h1>{current_state}</h1>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// };

// export default App;

import React, { useReducer } from "react";

const App = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };

      case "CHANGENAME":
        return {
          ...state,
          name: action.payload,
        };

      default:
        return state;
    }
  }

  const [current_state, dispatch] = useReducer(reducer, {
    count: 126,
    name: "NICK",
  });

  return (
    <div>
      <h1>{current_state.count}</h1>
      <h1>{current_state.name}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <button
        onClick={() =>
          dispatch({
            type: "CHANGENAME",
            payload: "ChotaBHEEM",
          })
        }
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
