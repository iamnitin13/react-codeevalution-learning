import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./Article";
import { fetchProduct } from "../redux-toolkit/productSlice";
import Product from "./Product";

const Main = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.ecomReducer);
  const { products, loading } = useSelector((state) => state.productReducer);

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

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

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
          margin: "1rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {loading ? (
          <div
            style={{
              width: "10rem",
              height: "10rem",
              borderRadius: "100%",
              borderTop: "1rem solid #6da9f5",
              borderRight: "1rem solid transparent",
              margin: "auto",
              position: "relative",
              top: "250px",
              animation: "spinner 0.6s linear infinite",
            }}
          ></div>
        ) : (
          products &&
          products.length &&
          products.map((item) => {
            return (
              <Product
                key={item?.id}
                item={item}
                handleEmptyCartBtn={handleEmptyCartBtn}
              />
            );
          })
        )}
      </section>
      {cartData && cartData.length ? <Article cart={cartData} /> : null}
    </main>
  );
};

export default Main;
