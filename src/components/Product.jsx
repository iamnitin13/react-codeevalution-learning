import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux-toolkit/ecomSlice";

const Product = ({ item, handleEmptyCartBtn }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: "2rem 3rem",
        padding: "1.5rem",
        boxShadow: "0 2px 16px 0px rgba(0,0,0,0.25)",
        position: "relative",
        height: "auto",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            color: "#fff",
            width: "150px",
            height: "150px",
            borderRadius: "10%",
            marginRight: "1rem",
          }}
        >
          <img
            id="product"
            src={item?.image}
            alt={item?.name}
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div style={{ width: "250px" }}>
          <h3 style={{ margin: 0, textAlign: "left" }}>{item?.name}</h3>
          <p
            style={{
              margin: "0.5rem auto",
              textAlign: "left",
            }}
          >
            {item?.description}
          </p>
          <div style={{ textAlign: "left", marginBlockStart: " 0.4rem" }}>
            <b>Types: </b>
            {item?.types}
          </div>
          <div style={{ textAlign: "left", marginBlock: " 0.6rem" }}>
            <b>Color: </b>
            {item?.colorsArray.map((color) => {
              return (
                <span
                  key={color}
                  style={{
                    display: "inline-block",
                    marginBottom: "-3px",
                    marginInline: "0.4rem",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100%",
                    borderStyle: "solid",
                    background: color,
                  }}
                ></span>
              );
            })}
          </div>
          <div style={{ textAlign: "left", marginBlockStart: " 0.4rem" }}>
            <b>Price: </b>${item?.price}
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <button
          style={{
            width: "150px",
            height: "50px",
            color: "#000",
            background: "lightgray",
            margin: "0",
            marginRight: "1rem",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
            pointerEvents: !handleEmptyCartBtn(item.id) && "none",
            opacity: !handleEmptyCartBtn(item.id) && "0.3",
          }}
          onClick={() => dispatch(removeFromCart(item?.id))}
        >
          REMOVE
        </button>
        <button
          style={{
            width: "260px",
            height: "50px",
            color: "#fff",
            background: "green",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
          }}
          onClick={() => dispatch(addToCart(item))}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
