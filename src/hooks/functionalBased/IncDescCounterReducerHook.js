import React from "react";

const initialState = 0;
const reducer = (state, action) => {
  //transition from oldstate to newState need action(it is an instruction to reducer;
  // what action specified it perform necessary state transition)
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function IncDescCounterReducerHook() {
  const [count, dispatch] = React.useReducer(reducer, initialState); //dispatch to call the reducer function with appropriate actions

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Descrement</button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
