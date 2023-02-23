import React from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ loginModalHandler, displaySignUp }) => {
    return (
        <div>
            <header className="header flex-between-center">
                <div className="logo-wrap">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="buttons">
                    <a
                        onClick={loginModalHandler}
                        href="#"
                        className="primary-btn"
                    >
                        LOGIN
                    </a>
                    {displaySignUp && (
                        <Link to="/register" className="primary-btn">
                            SIGN UP
                        </Link>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
