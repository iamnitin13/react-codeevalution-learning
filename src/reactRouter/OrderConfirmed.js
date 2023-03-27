import React from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirmed() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Placed Successfully !!!</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default OrderConfirmed;
