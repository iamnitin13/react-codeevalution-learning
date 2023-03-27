import React, { useState, useEffect } from "react";

function FunctionMouseEffectHook() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    // when unmounted component cancel all sync & async subscribtion or event lisnter that is going on to prevent mermory leak
    return () => {
      console.log("unmount component");
      window.removeEventListener("mousemove", logMousePosition);
    }; // this will be cleanup function; execute when component is unmount
  }, []);

  return (
    <div>
      X- {position.x} Y- {position.y}
    </div>
  );
}

export default FunctionMouseEffectHook;
