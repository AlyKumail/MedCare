import React from "react";
import "../styles/Login.css";
import cross from "../img/cross.png";

import { Link } from "react-router-dom";

const Login = ({ modalHandler }) => {
  return (
    <div className="login-wrapper">
      <div className="login">
        <img onClick={modalHandler} className="cross" src={cross} alt="" />

        <h2>Login</h2>
        <form action="#">
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>
          <Link to="/patient" className="primary-btn">
            Login
          </Link>
          <Link className="forgotPassword">Forgot Password</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
