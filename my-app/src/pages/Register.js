import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

import { Link } from "react-router-dom";

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    specialization: "",
    experience: "",
    walletAddress: "",
    hospital: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    console.log(isSuccess, user);
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      country: "",
      specialization: "",
      experience: "",
      walletAddress: "",
      hospital: "",
      password: "",
      password2: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = specialization
        ? {
            name,
            email,
            phone,
            dob,
            country,
            specialization,
            experience,
            walletAddress,
            hospital,
            password,
            password2,
          }
        : {
            name,
            email,
            phone,
            dob,
            country,
            walletAddress,
            password,
            password2,
          };
      console.log("Form submit");
      dispatch(register(userData));
    }
  };

  const {
    name,
    email,
    phone,
    dob,
    country,
    specialization,
    experience,
    walletAddress,
    hospital,
    password,
    password2,
  } = formData;

  const onChangeHandler = (e) => {
    // console.log(name);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
                    resetForm();
                  }}
                  className="switch-btn"
                >
                  Patient Register
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmitHandler}>
                <h3>Patient Registeration</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="name">
                    Name*
                  </label>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder=""
                    name="email"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    type="text"
                    value={phone}
                    placeholder=""
                    name="phone"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="dob">
                    DOB*
                  </label>
                  <input
                    type="date"
                    value={dob}
                    name="dob"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="country">
                    Country*
                  </label>
                  <input
                    type="text"
                    value={country}
                    placeholder=""
                    name="country"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="walletAddress">
                    Wallet Address*
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    placeholder=""
                    name="walletAddress"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password*
                  </label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password2">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    value={password2}
                    name="password2"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <button type="submit" className="primary-btn">
                  {isLoading ? "Loading..." : "Register"}
                </button>
                <Link to="/login" className="forgotPassword">
                  Already registered ?
                </Link>
              </form>
            )}
          </div>
          <div className="form-wrap">
            {isDoctor ? (
              <form onSubmit={onSubmitHandler}>
                <h3>Doctor Registeration</h3>
                <div className="form-item">
                  <label className="formLabel" htmlFor="name">
                    Name*
                  </label>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder=""
                    name="email"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    type="text"
                    value={phone}
                    placeholder=""
                    name="phone"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="dob">
                    DOB*
                  </label>
                  <input
                    type="date"
                    value={dob}
                    name="dob"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="country">
                    Country*
                  </label>
                  <input
                    type="text"
                    value={country}
                    placeholder=""
                    name="country"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="specialization">
                    Specialization*
                  </label>
                  <input
                    type="text"
                    value={specialization}
                    name="specialization"
                    onChange={onChangeHandler}
                    placeholder=""
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="experience">
                    Experience*
                  </label>
                  <input
                    type="text"
                    value={experience}
                    name="experience"
                    onChange={onChangeHandler}
                    placeholder=""
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="walletAddress">
                    Wallet Address*
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    placeholder=""
                    name="walletAddress"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="hospital">
                    Hospital*
                  </label>
                  <input
                    type="text"
                    value={hospital}
                    placeholder=""
                    name="hospital"
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className="form-item">
                  <label className="formLabel" htmlFor="password">
                    Password*
                  </label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="formLabel" htmlFor="password2">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    value={password2}
                    name="password2"
                    placeholder=""
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <button type="submit" className="primary-btn">
                  {isLoading ? "Loading..." : "Register"}
                </button>
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
                    resetForm();
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

export default Register;
