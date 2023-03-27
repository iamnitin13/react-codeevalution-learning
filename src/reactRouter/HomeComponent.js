import React from "react";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate(); //navigate programatically
  return (
    <>
      <div> HomeComponent</div>
      <hr />
      {/* replace this naviagtion from brower history stack when true */}
      <button onClick={() => navigate("/order-placed", { replace: false })}>
        Place Order
      </button>
    </>
  );
}

export default HomeComponent;
