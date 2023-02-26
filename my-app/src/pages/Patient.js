import React from 'react'
import "../styles/Patient.css";
// import { Link } from "react-router-dom";

// import logo from "../img/logo-dark.png";
// import grid from "../img/icon-grid.png";
// import record from "../img/icon-record.png";
// import history from "../img/icon-history.png";
// import user from "../img/icon-user.png";
import Sidebar from '../components/Sidebar';
import bell from "../img/icon-bell.png";



 
const Patient = () => {
  return (
    <div className='patient-container flex'>
      <Sidebar active="patient"></Sidebar>
      <div className="portal-main flex-between-start">
        <div className="portal-main-left">
          <div className="record-access card">
            <div className="card-header">
              <h3>Record Access</h3>
            </div>
            <form action="#">
              <div className="input-item flex-between-center">
                <label htmlFor="id">ID : </label>
                <input type="text" name='id' id='id' />
              </div>
              <button>Grant</button>
            </form>
          </div>
          <div className="access-request card">
            <div className="card-header">
              <h3>Access Request</h3>
            </div>

            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <button>Grant Access</button>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <button>Grant Access</button>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <button>Grant Access</button>
            </div>
          </div>
        </div>
        <div className="portal-main-right">
          <div className="data-shared card">
            <div className="card-header">
              <h3>Data Shared With</h3>
              <p className=''>Ongoing Appointments</p>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <div className="sub-card-buttons flex-center">
                <button className='btn-notification flex-center'> <img src={bell} alt="" /> Notifications</button>
                <button>Grant Access</button>
              </div>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <div className="sub-card-buttons flex-center">
                <button className='btn-notification flex-center'> <img src={bell} alt="" /> Notifications</button>
                <button>Grant Access</button>
              </div>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <div className="sub-card-buttons flex-center">
                <button className='btn-notification flex-center'> <img src={bell} alt="" /> Notifications</button>
                <button>Grant Access</button>
              </div>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <div className="sub-card-buttons flex-center">
                <button className='btn-notification flex-center'> <img src={bell} alt="" /> Notifications</button>
                <button>Grant Access</button>
              </div>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p><b>Doctor Name : </b>Ali Kumail</p>
                <span className="date">24/2/2023</span>
              </div>
              <p><b>Doctor ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw</p>
              <p><b>Hospital : </b>Shifa, Islamabad</p>
              <div className="sub-card-buttons flex-center">
                <button className='btn-notification flex-center'> <img src={bell} alt="" /> Notifications</button>
                <button>Grant Access</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patient