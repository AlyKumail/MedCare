import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

import heroImg from "../img/home-img.png";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="container">
        <Navbar displayLogin={true} displaySignUp={true}></Navbar>
        <section className="hero flex-between-center">
          <div className="hero-left">
            <h1>Most secure Electronic Health Record Management System</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>

            <Link to="/register" className="primary-btn">
              Register Now
            </Link>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
