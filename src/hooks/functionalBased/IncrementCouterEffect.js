import React, { useState, useEffect } from "react";

function IncrementCouterEffect() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementCount, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <b>Automatic Count: {count}</b>
    </div>
  );
}

export default IncrementCouterEffect;
