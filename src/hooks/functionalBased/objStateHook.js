import React, { useState } from "react";

export default function ObjStateHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <label htmlFor="fName">FirstName: </label>
      <input
        type="text"
        id="fName"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <label htmlFor="lName">LastName: </label>
      <input
        type="text"
        id="lName"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h4>
        My name is : {name.firstName} {name.lastName}
      </h4>
    </form>
  );
}
