import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
              <form onSubmit={loginSubmitHandler} action="#">
                <h3>Patient Login</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={onChangeHandler}
                    value={email}
                    type="email"
                    name="email"
                    placeholder=""
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={onChangeHandler}
                    value={password}
                    type="password"
                    placeholder=""
                    required
                    name="password"
                  />
                </div>
                <button className="primary-btn">Login</button>
                <a href="#" className="forgotPassword">
                  Forgot Password ?
                </a>
              </form>
            )}
          </div>
          <div className="form-wrap">
            {isDoctor ? (
              <form onSubmit={loginSubmitHandler} action="#">
                <h3>Doctor Login</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={onChangeHandler}
                    value={email}
                    type="email"
                    name="email"
                    placeholder=""
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={onChangeHandler}
                    value={password}
                    type="password"
                    placeholder=""
                    required
                    name="password"
                  />
                </div>
                <button type="submit" className="primary-btn">
                  Login
                </button>
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
