import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Register.css";

const Register = () => {
    return (
        <div className="register-container">
            <div className="container">
                <Navbar hideSignUp={false}></Navbar>
                <div className="register">
                    <h2>Account Registration</h2>
                    <form action="#">
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input type="text" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="dob">DOB</label>
                            <input type="date" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="city">City</label>
                            <input type="text" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="country">Country</label>
                            <input type="text" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input type="password" required />
                        </div>
                        <a className="primary-btn">Register</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
