import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext";

function Profile() {
  const auth = UserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Hi,{auth.user}</h2>
      Welcome to Profile Page
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
