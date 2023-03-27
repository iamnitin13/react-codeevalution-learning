import React, { useState } from "react";
import FunctionMouseEffectHook from "./functionMouseEffectHook";
import IncrementCouterEffect from "./IncrementCouterEffect";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {/* {display && <FunctionMouseEffectHook />} */}
      {display && <IncrementCouterEffect />}
    </div>
  );
}

export default MouseContainer;
