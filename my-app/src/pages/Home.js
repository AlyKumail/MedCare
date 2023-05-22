import React, { useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

import heroImg from "../img/home-img.png";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Works from "../components/Works";
import Process from "../components/Process";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="container">
        <Navbar displayLogin={true} displaySignUp={true}></Navbar>
        <section className="hero flex-between-center">
          <div className="hero-left">
            <h1>Most secure Electronic Health Record Management System</h1>
            <p>
              Electronic Health Records (EHR) revolutionize the way healthcare
              providers manage and exchange patient information. Traditionally,
              patient data was stored in paper-based records, making it
              difficult to access, share, and maintain accuracy. EHR systems
              digitize and centralize patient health information, improving
              efficiency and patient care.
            </p>

            <Link to="/register" className="primary-btn">
              Register Now
            </Link>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="" />
          </div>
        </section>
        <Services></Services>
        <Works></Works>
        <Process></Process>
      </div>
    </div>
  );
};

export default Home;
