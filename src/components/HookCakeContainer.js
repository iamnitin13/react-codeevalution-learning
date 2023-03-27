import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  //state for number to buycake
  const [order, setOrder] = useState(0);
  // equivalent to mapStateToProps method
  // useSelectore recive selector func as paramter ; selectore have redux state as an argument;return state value
  //   const numOfCakes = useSelector((state) => state.numOfCakes);

  // combine reducer
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  //   dispatch hook useDispatch; access to dispatch func in redux store;return refference to dispatch func from redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <input type="number" min={1} onChange={(e) => setOrder(e.target.value)} />
      <button onClick={() => dispatch(buyCake(order))}>Buy Cake</button>
    </div>
  );
}

export default HookCakeContainer;
