import React from "react";

function Title() {
  console.log("Rendering title");
  return <h2>useCallback hooks</h2>;
}

// it is a HOC,prevent func. Comp. for rendering if it props or state not change
export default React.memo(Title);
