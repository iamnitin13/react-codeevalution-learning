import React, { useCallback, useState } from "react";
import Button from "./components/Button";
import Count from "./components/Count";
import Title from "./components/Title";

function Parent() {
  const [age, setAge] = useState(50);
  const [salary, setSalary] = useState(500000);

  // tell react to not create a new function ;by using useCallback hook;
  // useCallback hook return memorised/cached version of callback function that only change when any one of it depedency change;
  // important for reference equality;return same func if no depency change;
  // else return new function reference; that cause prop change & rerender of that comp
  // useCallback work with react.memo to not cause child comp rerender

  //usecallback cache the provided function instance whereas useMemo cache the provide func result(it excuted the func & memorised only result)

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Incremnt Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>

      {/* whenever a comp. is render a function have a new refernce which will be different from previous one;
      as it pass as a prop to Button comp;; so it cause rerender of Button comp */}
    </div>
  );
}

export default Parent;
