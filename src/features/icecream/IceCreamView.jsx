import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const dispatch = useDispatch();
  const { numOfIceCream } = useSelector((state) => state.iceCream);

  return (
    <Fragment>
      <div>Number of iceCreams: {numOfIceCream}</div>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock iceCream</button>
    </Fragment>
  );
};

export default IceCreamView;
