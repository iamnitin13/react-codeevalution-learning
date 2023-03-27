import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

function LoggedWrapper({ children }) {
  const auth = UserAuth();

  // redirect to it own state instead of redirecting to home using useLocation hook
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default LoggedWrapper;
