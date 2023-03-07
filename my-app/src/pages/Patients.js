import React from "react";

import "../styles/Patient.css";
import "../styles/Patients.css";
import Sidebar from "../components/Sidebar";

const Doctor = () => {
  return (
    <div className="patient-container doctor-container flex">
      <Sidebar isDoctorDashboard={true} active="patients"></Sidebar>
      <div className="portal-main"></div>
    </div>
  );
};

export default Doctor;
