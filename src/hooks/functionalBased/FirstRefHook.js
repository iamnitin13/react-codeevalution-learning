import React, { useEffect, useRef } from "react";

// useRef let you have reference to the value that not needed for rendering,(presit value when rerendering not cause rendering when value change)
// we can get access to the dom node directly in functional component

function FirstRefHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    // react set ref current property to corresponding dom node
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FirstRefHook;
