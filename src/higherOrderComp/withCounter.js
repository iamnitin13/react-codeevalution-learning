import React from "react";

const withCounter = (WrappedComponent, incremntBy = 1) => {
  const WithCounter = (props) => {
    const [count, setCount] = React.useState(0);
    function incremntCount() {
      setCount((prevCount) => prevCount + incremntBy);
    }
    return (
      <WrappedComponent
        count={count}
        incrementCount={incremntCount}
        {...props}
      />
    );
  };
  return WithCounter;
};

export default withCounter;
