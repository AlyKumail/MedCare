import React from "react";

import "../styles/Patient.css";
import "../styles/Doctor.css";
import Sidebar from "../components/Sidebar";

import totalAppointment from "../img/total-appointment.png";
import totalPatient from "../img/total-patient.png";

const Doctor = () => {
  return (
    <div className="patient-container doctor-container flex">
      <Sidebar isDoctorDashboard={true} active="doctor"></Sidebar>
      <div className="portal-main">
        <div className="portal-main-row flex-between-center">
          <div className="record-access card">
            <div className="card-header">
              <h3>Request Record Access</h3>
            </div>
            <form action="#">
              <div className="input-item flex-between-center">
                <label htmlFor="id">ID : </label>
                <input type="text" name="id" id="id" />
              </div>
              <button>Request</button>
            </form>
          </div>
          <div className="total-appointment card">
            <div className="card-header">
              <h3>Total Appointment</h3>
            </div>
            <img src={totalAppointment} alt="" />
            <p>215</p>
          </div>
          <div className="total-patient card">
            <div className="card-header">
              <h3>Total Patient</h3>
            </div>
            <img src={totalPatient} alt="" />
            <p>215</p>
          </div>
        </div>
        <div className="portal-main-row">
          <div className="ongoing-appointments card">
            <div className="card-header">
              <h3>On going appointments</h3>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Behram Khanzada
                </p>
                <span className="date">24/2/2023</span>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <button>View</button>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Behram Khanzada
                </p>
                <span className="date">24/2/2023</span>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <button>View</button>
            </div>
            <div className="sub-card flex-start-col">
              <div className="sub-card-header flex-between-center">
                <p>
                  <b>Patient Name : </b>Behram Khanzada
                </p>
                <span className="date">24/2/2023</span>
              </div>
              <p>
                <b>Patient ID : </b>HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
              </p>
              <p>
                <b>Hospital : </b>Shifa, Islamabad
              </p>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
