import React from "react";

import "../styles/Patient.css";
import "../styles/RecordDetail.css";
import Sidebar from "../components/Sidebar";

const RecordDetail = () => {
  return (
    <div className="patient-container recordDetail-container flex">
      <Sidebar active="records"></Sidebar>
      <div className="portal-main flex-between-start">
        <div className="card recordDetail">
          <div className="card-header">
            <h3>Prescription</h3>
          </div>
          <div className="card-body">
            <div className="recordDetail-header flex-between-center">
              <div className="patient-info">
                <h4>Patient Information</h4>
                <p>Patinet Name : Ahmad Hassan</p>
                <p>Patient DOB: 2/2/2000</p>
                <p>Gender: Male</p>
                <p>Diagnosed with: xyz</p>
              </div>
              <div className="doctor-info">
                <h4>Doctor Information</h4>
                <p>Patinet Name : Ahmad Hassan</p>
                <p>Patient DOB: 2/2/2000</p>
                <p>Gender: Male</p>
                <p>Diagnosed with: xyz</p>
              </div>
              <div className="general-info">
                <p>Date : 16/12/2023</p>
                <p>Time 3:31 PM</p>
                <p>Location: PAF Hospital</p>
              </div>
            </div>
            <div className="recordDetail-body">
              <h4>Medication</h4>
              <table>
                <thead>
                  <tr className="table-head">
                    <th>Name</th>
                    <th>Strength</th>
                    <th>Unit</th>
                    <th>Frequency</th>
                    <th>Duration</th>
                    <th>Instructions</th>
                  </tr>
                </thead>
                <span className="table-space"></span>
                <tbody>
                  <tr>
                    <td>HydraFiz</td>
                    <td>500mg</td>
                    <td>Tablet</td>
                    <td>1 daily</td>
                    <td>1 week</td>
                    <td>none</td>
                  </tr>
                  <tr>
                    <td>HydraFiz</td>
                    <td>200mg</td>
                    <td>Tablet</td>
                    <td>2 daily</td>
                    <td>1 week</td>
                    <td>none</td>
                  </tr>
                  <tr>
                    <td>HydraFiz</td>
                    <td>300mg</td>
                    <td>Tablet</td>
                    <td>3 daily</td>
                    <td>1 week</td>
                    <td>none</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
