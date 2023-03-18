import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <div className="login-container">
      <div className="container">
        <Navbar displayLogin={false} displaySignUp={true}></Navbar>
        <div className="form-container flex-between-center">
          <div className={isDoctor ? "whiteBg move" : "whiteBg"}></div>
          <div className="form-wrap">
            {isDoctor ? (
              <div className="switch">
                <p>Are you a Patient ?</p>
                <div
                  onClick={() => {
                    setIsDoctor(false);
                  }}
                  className="switch-btn"
                >
                  Patient Login
                </div>
              </div>
            ) : (
              <form action="#">
                <h3>Patient Login</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email
                  </label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password
                  </label>
                  <input type="password" placeholder="" required />
                </div>
                <Link to="/patient" className="primary-btn">
                  Login
                </Link>
                <a href="#" className="forgotPassword">
                  Forgot Password ?
                </a>
              </form>
            )}
          </div>
          <div className="form-wrap">
            {isDoctor ? (
              <form action="#">
                <h3>Doctor Login</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email
                  </label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password
                  </label>
                  <input type="password" placeholder="" required />
                </div>
                <Link to="/doctor" className="primary-btn">
                  Login
                </Link>
                <a href="#" className="forgotPassword">
                  Forgot Password ?
                </a>
              </form>
            ) : (
              <div className="switch">
                <p>Are you a Doctor ?</p>
                <div
                  onClick={() => {
                    setIsDoctor(true);
                  }}
                  className="switch-btn"
                >
                  Doctor Login
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
