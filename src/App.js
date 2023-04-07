import { useSelector } from "react-redux";
import "./App.css";
import products from "./product/product.json";

function App() {
  const { cartCount } = useSelector((state) => state.ecomReducer);

  return (
    <div className="App">
      <header
        style={{
          height: "70px",
          background: "#fff",
          padding: "0.8rem 1.5rem",
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
        <span
          style={{
            verticalAlign: "top",
            position: "relative",
            top: "17px",
            left: "5px",
          }}
        >
          {" "}
          Cart Count: {cartCount}
        </span>
      </header>
      <main
        style={{
          display: "flex",
          marginTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <section
          style={{
            width: "80%",
            margin: "1rem auto",
          }}
        >
          {products.map((item, index) => {
            return (
              <div
                key={item?.name}
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
                    src={item?.image}
                    alt={item?.name}
                    style={{ width: "100%", objectFit: "cover" }}
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
                    }}
                  >
                    Remove
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
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <article
          style={{
            width: "20%",
            padding: "10rem 2rem ",
            overflow: "auto",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          pariatur eos iusto autem. Eum dicta qui quo magni! Fugit libero
          reprehenderit ab pariatur sint excepturi cum delectus eligendi ut
          suscipit.
        </article>
      </main>
      <footer
        style={{
          color: "#fff",
          height: "70px",
          background: "black",
          padding: "1.5rem",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        Redux-Saga @Copyright 2023
      </footer>
    </div>
  );
}

export default App;
