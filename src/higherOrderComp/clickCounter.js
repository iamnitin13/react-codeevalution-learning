import React from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, incrementCount, name }) {
  return (
    <button onClick={incrementCount}>
      Clicked {name} {count} times.
    </button>
  );
}

export default withCounter(ClickCounter, 3);
