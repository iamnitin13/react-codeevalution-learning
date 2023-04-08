import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { clearToCart } from "../redux-toolkit/ecomSlice";

const Article = ({ cart }) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingPriceRef = useRef(100);

  useEffect(() => {
    const items = [...new Set(cart)];
    const mapItems = items.map((item) => {
      const count = cart.filter((product) => product.id === item.id).length;
      return { ...item, total: count };
    });
    setCartItem(mapItems);
  }, [cart]);

  useEffect(() => {
    const tp = cartItem.reduce((acc, item) => {
      const mul = item?.total * item?.price;
      return acc + mul;
    }, 0);
    setTotalPrice(tp);
  }, [cartItem]);

  return (
    <article
      style={{
        width: "25%",
        margin: "3rem auto",
        position: "fixed",
        boxShadow: "0 2px 14px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        background: "#fff",
        right: "3%",
        padding: "1rem 2rem",
      }}
    >
      <div
        id="selected"
        style={{
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {cartItem.map((data) => {
          return (
            <div
              key={data?.id}
              style={{ padding: "1rem auto", width: "100%", textAlign: "left" }}
            >
              <div
                style={{
                  display: "flex",
                  marginBlock: "0.5rem 1.5rem",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                <img
                  src={data?.image}
                  alt={data?.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "2px",
                    boxShadow: "0 2px 2px rgba(0,0,0,0.25)",
                    marginInline: "0.5rem",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    marginInline: "0.2rem 0",
                  }}
                >
                  <h4
                    style={{
                      margin: "0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "180px",
                    }}
                  >
                    {data?.name}
                  </h4>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "250px",
                        paddingTop: "0.3rem",
                      }}
                    >
                      {data?.types}
                    </span>
                    <span>
                      ${data?.price} X {data?.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "1rem",
          }}
        >
          <span>SubTotal</span>
          <span>${totalPrice}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "1rem",
          }}
        >
          <span>Shipping</span>
          <span>${shippingPriceRef.current}</span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "1.5rem",
          }}
        >
          <span>Total</span>
          <b>${totalPrice + shippingPriceRef.current}</b>
        </div>
      </div>
      <div style={{ padding: "1rem auto", width: "100%", display: "flex" }}>
        <button
          style={{
            width: "35%",
            height: "50px",
            color: "#fff",
            background: "#000",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
            margin: "1rem 0",
          }}
          onClick={() => dispatch(clearToCart())}
        >
          CLEAR
        </button>
        <button
          style={{
            width: "60%",
            height: "50px",
            color: "#fff",
            background: "orange",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
            margin: "1rem 0 1rem auto",
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </article>
  );
};

export default Article;
