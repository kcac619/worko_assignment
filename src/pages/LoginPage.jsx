import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    // Handle login success (store tokens, etc.)
    localStorage.setItem("isLoggedIn", "true");
    navigate("/candidate/home");
  };

  return (
    <div className="container">
      <h2 className="text-center text-light">Login</h2>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
