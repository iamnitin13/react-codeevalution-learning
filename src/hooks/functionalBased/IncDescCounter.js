import React, { useState } from "react";

export default function IncDescCounter() {
  let intialCount = 0;
  const [count, setCount] = useState(intialCount);

  function handleIncCounter() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDescCounter() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleIncCounter}>+</button>
      <button onClick={handleDescCounter}>-</button>
      <button onClick={() => setCount(intialCount)}>Reset</button>
    </div>
  );
}
