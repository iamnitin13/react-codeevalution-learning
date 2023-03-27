import React, { useReducer } from "react";

// complex reducer where state & action will be an object unlike the simple count state & (incremnt,descremnt,reset) action
// action with object is good we can pass number of argument to use when transition state to new state
// state as an object can have more than one state variable

const initialState = { firstCount: 0 };

const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { firstCount: state.firstCount + value };
    case "decrement":
      return { firstCount: state.firstCount - value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function ComplexReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState); //dispatch to call the reducer function with appropriate actions

  return (
    <div>
      <div>Count: {count.firstCount}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Descrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
