import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = ({ onLoginSuccess }) => {
  return (
    <div className="container mt-5 text-center">
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={onLoginSuccess}
          onFailure={(error) => console.log("Login failed", error)}
          theme="dark"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
