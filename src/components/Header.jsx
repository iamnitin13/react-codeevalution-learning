import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartData } = useSelector((state) => state.ecomReducer);

  return (
    <header
      style={{
        height: "70px",
        background: "#fff",
        padding: "0.8rem 2rem",
        textAlign: "right",
        verticalAlign: "middle",
        boxShadow: "0 2px 4px lightgray",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "50px",
          top: "20px",
          fontSize: "24px",
          fontWeight: 800,
        }}
      >
        Redux Saga Ecom
      </span>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg5aOdsSBCa_gFagFSoyubuFdw-Ug1nNG8hP0-7pxGQ&usqp=CAU&ec=48665699"
        alt="cart"
        style={{ height: "50px" }}
      />
      {cartData.length ? (
        <span
          style={{
            verticalAlign: "top",
            position: "absolute",
            top: "11px",
            right: "43px",
            background: "#f5f5f7",
            borderRadius: "100%",
            width: "20px",
            height: "20px",
            textAlign: "center",
            color: "green",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {cartData.length}
        </span>
      ) : null}
    </header>
  );
};

export default Header;
