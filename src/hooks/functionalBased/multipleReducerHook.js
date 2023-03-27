import React from "react";

const initialState = 0;
const reducer = (state, action) => {
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

export default function MultipleReducerHook() {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  const [Secondcount, dispatchTwo] = React.useReducer(reducer, initialState);

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
      <hr />

      <div>Count: {Secondcount}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Descrement</button>
      <button
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
