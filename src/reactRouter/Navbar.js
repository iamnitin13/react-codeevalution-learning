import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../context/authContext";
// Navlink it attach active class on the current route

function styleNavLink({ isActive }) {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
}

function Navbar() {
  const auth = UserAuth();

  return (
    <nav>
      <NavLink to="/" style={styleNavLink}>
        Home
      </NavLink>
      <NavLink to="/about" style={styleNavLink}>
        About
      </NavLink>
      <NavLink to="/product" style={styleNavLink}>
        Product
      </NavLink>
      <NavLink to="/users" style={styleNavLink}>
        Users
      </NavLink>
      <NavLink to="/profile" style={styleNavLink}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to="/login" style={styleNavLink}>
          Login
        </NavLink>
      )}

      {/* testing for useCallback & useMemo hook;not related to routes just simply using it */}
      <NavLink to="/usecallback" style={styleNavLink}>
        useCallback Example
      </NavLink>
      <NavLink to="/usememo" style={styleNavLink}>
        useMemo Example
      </NavLink>
    </nav>
  );
}

export default Navbar;
