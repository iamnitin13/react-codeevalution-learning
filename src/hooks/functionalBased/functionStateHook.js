import React from "react";

export default function FunctionStateHook() {
  const [count, setCount] = React.useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>Counter : {count}</div>
      <button onClick={incrementCount}>Function Based Btn</button>
    </div>
  );
}
