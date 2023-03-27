import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, incrementCount }) {
  return <button onMouseOver={incrementCount}>Hover {count} times.</button>;
}

export default withCounter(HoverCounter);
