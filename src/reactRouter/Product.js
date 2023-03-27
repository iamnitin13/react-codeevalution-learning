import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <input type="search" placeholder="Search Product.." />
      <br />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      {/* step2 outlet is for rendering the chid route element that matches the routes if any */}
      <Outlet />
    </div>
  );
}

export default Product;
