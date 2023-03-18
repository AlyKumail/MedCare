import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <div className="register-container login-container">
      <div className="container">
        <Navbar displayLogin={true} displaySignUp={false}></Navbar>
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
                  Patient Register
                </div>
              </div>
            ) : (
              <form action="#">
                <h3>Patient Registeration</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="name">
                    Name*
                  </label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email*
                  </label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="phone">
                    Phone*
                  </label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="dob">
                    DOB*
                  </label>
                  <input type="date" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="country">
                    Country*
                  </label>
                  <input type="text" placeholder="" required />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password*
                  </label>
                  <input type="password" placeholder="" required />
                </div>
                <a className="primary-btn">Register</a>
                <Link to="/login" className="forgotPassword">
                  Already registered ?
                </Link>
              </form>
            )}
          </div>
          <div className="form-wrap">
            {isDoctor ? (
              <form action="#">
                <h3>Doctor Registeration</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="name">
                    Name*
                  </label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email*
                  </label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="phone">
                    Phone*
                  </label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="dob">
                    DOB*
                  </label>
                  <input type="date" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="country">
                    Country*
                  </label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="specialization">
                    Specialization*
                  </label>
                  <input type="text" placeholder="" required />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password*
                  </label>
                  <input type="password" placeholder="" required />
                </div>
                <a className="primary-btn">Register</a>
                <Link to="/login" className="forgotPassword">
                  Already registered ?
                </Link>
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
                  Doctor Register
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
