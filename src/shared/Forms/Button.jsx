import React from "react";

const Button = ({ type, label, handleFunc }) => {
  return handleFunc && typeof handleFunc === "function" ? (
    <button type={type} onClick={handleFunc}>
      {label}
    </button>
  ) : (
    <button type={type}>{label}</button>
  );
};

export default Button;
