import ComponentF from "./componentF";

// function ComponentE() {
//   return <ComponentF />;
// }

// export default ComponentE;

// anothr way of consuming the context in class by using contextType

import React, { Component } from "react";
import UserContext from "../context/userContext";

class componentE extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello {this.context};
        <ComponentF />
      </div>
    );
  }
}

componentE.contextType = UserContext;

export default componentE;
