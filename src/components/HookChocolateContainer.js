import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyChocolate } from "../redux";

function HookChocolateContainer() {
  const numOfChocolates = useSelector(
    (state) => state.chocolate.numOfChocolates
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Chocolate: {numOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
    </div>
  );
}

export default HookChocolateContainer;
