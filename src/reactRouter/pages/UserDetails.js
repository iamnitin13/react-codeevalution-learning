import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  // useParams will return key,value obj of current route pathparam
  const param = useParams();
  return <div>UserDetails of {param["userId"]} user.</div>;
}

export default UserDetails;
