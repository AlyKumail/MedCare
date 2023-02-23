import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";


import heroImg from "../img/home-img.png";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className="container">
            {isModalOpen && (
                <Login modalHandler={modalHandler}></Login>
            )}
            <Navbar
                displaySignUp={true}
                loginModalHandler={modalHandler}
            ></Navbar>
            <section className="hero flex-between-center">
                <div className="hero-left">
                    <h1>
                        Most secure Electronic Health Record Management System
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
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
    );
};

export default Home;
