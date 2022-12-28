import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="loginCard">
        <p className="loginHeading">Login to your account</p>
        <div>
          <p className="inputHeader">Email address</p>
          <input className="loginInput" placeholder="Email address" />
        </div>
        <div>
          <p className="inputHeader">Password</p>
          <input
            className="loginInput"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
        <p className="bottomText">
          New here?{" "}
          <span
            className="extraText"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
