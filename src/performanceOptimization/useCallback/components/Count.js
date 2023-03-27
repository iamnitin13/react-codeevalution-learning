import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <h4>
      {text} : {count}
    </h4>
  );
}

export default React.memo(Count);
