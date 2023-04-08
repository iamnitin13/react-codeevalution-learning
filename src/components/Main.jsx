import React, { useCallback, useEffect } from "react";
import products from "../product/product.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux-toolkit/ecomSlice";
import Article from "./Article";

const Main = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.ecomReducer);

  const handleEmptyCartBtn = useCallback(
    (id) => cartData.filter((data) => data.id === id).length,
    [cartData]
  );

  useEffect(() => {
    if (cartData && cartData.length) {
      document.querySelector("section").style.setProperty("width", "70%");
    } else {
      document.querySelector("section").style.setProperty("width", "100%");
    }
  }, [cartData]);

  return (
    <main
      style={{
        display: "flex",
        marginTop: "70px",
        paddingBottom: "70px",
        position: "relative",
      }}
    >
      <section
        style={{
          width: "100%",
          margin: "1rem 0",
          position: "relative",
          left: "0",
        }}
      >
        {products.map((item) => {
          return (
            <div
              key={item?.id}
              style={{
                margin: "2rem 3rem",
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                height: "200px",
                border: "1px dashed #7d7f81",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
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
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ margin: 0, textAlign: "left" }}>{item?.name}</h3>
                <h6
                  style={{
                    margin: "1rem auto",
                    textAlign: "left",
                  }}
                >
                  {item?.description}
                </h6>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "165px",
                }}
              >
                <span style={{ marginInline: "0.9rem" }}>
                  <b>Types: </b>
                  {item?.types}
                </span>
                <span style={{ marginInline: "0.9rem" }}>
                  <b>Color: </b>
                  {item?.colorsArray.map((color) => {
                    return (
                      <span
                        key={color}
                        style={{
                          display: "inline-block",
                          marginBottom: "-3px",
                          marginInline: "0.2rem",
                          width: "20px",
                          height: "20px",
                          borderRadius: "100%",
                          borderStyle: "solid",
                          background: color,
                        }}
                      ></span>
                    );
                  })}
                </span>
                <span style={{ marginInline: "0.9rem" }}>
                  <b>Price: </b>${item?.price}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "end",
                  position: "absolute",
                  right: "30px",
                }}
              >
                <button
                  style={{
                    width: "150px",
                    height: "50px",
                    color: "#000",
                    background: "lightgray",
                    margin: "auto 1rem",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "18px",
                    pointerEvents: !handleEmptyCartBtn(item.id) && "none",
                    opacity: !handleEmptyCartBtn(item.id) && "0.3",
                  }}
                  onClick={() => dispatch(removeToCart(item?.id))}
                >
                  REMOVE
                </button>
                <button
                  style={{
                    width: "150px",
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
        })}
      </section>
      {cartData && cartData.length ? <Article cart={cartData} /> : null}
    </main>
  );
};

export default Main;
