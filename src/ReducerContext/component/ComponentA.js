import React, { useContext } from "react";
import UserContext from "../../context/userContext";

function ComponentA() {
  const countContext = useContext(UserContext);
  return (
    <div>
      ComponentA {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Descrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
