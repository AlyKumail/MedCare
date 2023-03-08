import React from "react";

import "../styles/Patient.css";
import "../styles/Patients.css";
import Sidebar from "../components/Sidebar";

import patientImg1 from "../img/patient-img1.png";
import patientImg2 from "../img/patient-img2.png";
import patientImg3 from "../img/patient-img3.png";
import patientImg4 from "../img/patient-img4.png";
import patientImg5 from "../img/patient-img5.png";

import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <div className="patient-container doctor-container flex">
      <Sidebar isDoctorDashboard={true} active="patients"></Sidebar>
      <div className="portal-main">
        <div className="patients card">
          <div className="card-header">
            <h3>Patients</h3>
          </div>
          <div className="patients-item flex-center">
            <div className="patients-item-img">
              <img src={patientImg1} alt="" />
            </div>
            <div className="patients-item-text">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Ali Kumail
                </p>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <p>
                <b>Last Appointment : </b>2/03/2023
              </p>
            </div>
            <div className="patients-item-button">
              <button>
                <Link to="/patientAccess">View Detail</Link>
              </button>
            </div>
          </div>
          <div className="patients-item flex-center">
            <div className="patients-item-img">
              <img src={patientImg2} alt="" />
            </div>
            <div className="patients-item-text">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Ali Kumail
                </p>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <p>
                <b>Last Appointment : </b>2/03/2023
              </p>
            </div>
            <div className="patients-item-button">
              <button>
                <Link to="/patientAccess">View Detail</Link>
              </button>
            </div>
          </div>
          <div className="patients-item flex-center">
            <div className="patients-item-img">
              <img src={patientImg3} alt="" />
            </div>
            <div className="patients-item-text">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Ali Kumail
                </p>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <p>
                <b>Last Appointment : </b>2/03/2023
              </p>
            </div>
            <div className="patients-item-button">
              <button>
                <Link to="/patientAccess">View Detail</Link>
              </button>
            </div>
          </div>
          <div className="patients-item flex-center">
            <div className="patients-item-img">
              <img src={patientImg4} alt="" />
            </div>
            <div className="patients-item-text">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Ali Kumail
                </p>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <p>
                <b>Last Appointment : </b>2/03/2023
              </p>
            </div>
            <div className="patients-item-button">
              <button>
                <Link to="/patientAccess">View Detail</Link>
              </button>
            </div>
          </div>
          <div className="patients-item flex-center">
            <div className="patients-item-img">
              <img src={patientImg5} alt="" />
            </div>
            <div className="patients-item-text">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Ali Kumail
                </p>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <p>
                <b>Last Appointment : </b>2/03/2023
              </p>
            </div>
            <div className="patients-item-button">
              <button>
                <Link to="/patientAccess">View Detail</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
