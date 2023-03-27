import React, { useState, useEffect } from "react";

export default function FunctionEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   run after every component render
  useEffect(() => {
    console.log("Updating document title");
    document.title = `Clicked ${count} times.`;
  }, [count]);

  //   [] conditionally render based on the state and prop if it change

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} time</button>
    </div>
  );
}
