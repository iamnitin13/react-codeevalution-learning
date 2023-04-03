import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const [restockValue, setRestockValue] = useState(1);
  const { numOfCakes } = useSelector((state) => state.cake);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (!value || isNaN(+value)) return;
    setRestockValue(+value);
  };
  return (
    <Fragment>
      <div>Number of cakes: {numOfCakes}</div>
      <input
        type="number"
        name="restocked cake"
        value={restockValue}
        min={0}
        onChange={handleOnChange}
      />
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(restockValue))}>
        Restocked cakes
      </button>
    </Fragment>
  );
};

export default CakeView;
