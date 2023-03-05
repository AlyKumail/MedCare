import React from 'react'
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

import logo from "../img/logo-dark.png";
import grid from "../img/icon-grid.png";
import record from "../img/icon-record.png";
// import history from "../img/icon-history.png";
import user from "../img/icon-user.png";

const Sidebar = ({active}) => {
  return (
    <div className="sidebar">
        <div className="sidebar-wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navlinks">
            <div className="link flex-center">
              <img src={grid} alt="" />
              <Link to="/patient" className={active == 'patient' ? 'link-active' : ''}>Dashboard</Link>
            </div>
            <div className="link flex-center">
              <img src={record} alt="" />
              <Link to="/records" className={active == 'records' ? 'link-active' : ''}>View Records</Link>
            </div>
            <div className="link flex-center">
              <img src={user} alt="" />
              <Link to="/profile" className={active == 'profile' ? 'link-active' : ''}>Profile</Link>
            </div>
          </div>
          <div className="connect">
            <Link className='btn-connect'>Connect Wallet</Link>
          </div>
          <div className="logout">
            <Link className='btn-logout'>Logout</Link>
          </div>
        </div>
      </div>
  )
}

export default Sidebar