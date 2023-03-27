import React, { useMemo, useState } from "react";

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementCountTwo = () => {
    setCountTwo(countTwo + 1);
  };

  //   tell react not to computate unnessary when it take long time to computate
  // using useMemo; it memorise the result of the calulation (if no dependecny change else recompute)
  // return the memorised value if nothing change in the depedency
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCountOne}>CountOne - {countOne}</button>
        <span>{isEven ? " Even" : " Odd"}</span>
      </div>

      <button onClick={incrementCountTwo}>CountTwo - {countTwo}</button>
    </div>
  );
}

export default Counter;
