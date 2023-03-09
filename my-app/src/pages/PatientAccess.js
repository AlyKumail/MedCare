import React, { useState } from "react";

import "../styles/Patient.css";
import "../styles/PatientAccess.css";
import Sidebar from "../components/Sidebar";

import profile from "../img/profile.png";
import medicationRemove from "../img/medication-remove.png";

import pres from "../img/icon-pres.png";
import report from "../img/icon-report.png";
import labReport from "../img/icon-labReport.png";

import { Link } from "react-router-dom";

const PatientAccess = () => {
  const [medication, setMedication] = useState({
    name: "",
    strength: "",
    unit: "",
    frequency: "",
    duration: "",
    instructions: "",
  });

  const [medicationList, setMedicationList] = useState([]);

  const [isEnterRecordActive, setIsEnterRecordActive] = useState(true);

  const handleMedicationInput = (e) => {
    setMedication({ ...medication, [e.target.name]: e.target.value });
  };

  const handleMedicationAdd = () => {
    console.log(medication);
    setMedicationList([...medicationList, medication]);
    setMedication({
      name: "",
      strength: "",
      unit: "",
      frequency: "",
      duration: "",
      instructions: "",
    });
    console.log(medicationList);
  };

  const handleRemoveMedication = (targetIndex) => {
    const newMedicationList = medicationList.filter(
      (medication, index) => index != targetIndex
    );
    console.log("New MedList", newMedicationList);
    setMedicationList(newMedicationList);
  };

  return (
    <div className="patient-container patientAccess-container flex">
      <Sidebar isDoctorDashboard={true} active="patients"></Sidebar>
      <div className="portal-main">
        <div className="patientAccess">
          <div className="profile-public flex-center">
            <img src={profile} alt="" />
            <div className="profile-public-detail flex-between-center">
              <div>
                <h2>Ali Kumail</h2>
                <p>alikumail@gmail.com</p>
              </div>
              <div>
                <p>Age: 22</p>
                <p>DOB: 2/2/2000</p>
              </div>
              <div>
                <p>03330234324</p>
                <p>Islamabad, PK</p>
              </div>
            </div>
          </div>
          <div className="record-operations">
            <div className="record-operations-tab">
              <button
                onClick={() => {
                  setIsEnterRecordActive(true);
                }}
              >
                Enter Record
              </button>
              <button
                onClick={() => {
                  setIsEnterRecordActive(false);
                }}
              >
                Clinical Records
              </button>
            </div>
            <div className="record-operations-body">
              {isEnterRecordActive ? (
                <div className="enter-record flex-between-start">
                  <form className="main-form" action="#">
                    <h3>Enter Medical Record</h3>
                    <div className="input-item">
                      <label htmlFor="type">Record Type :</label>
                      <input type="text" />
                    </div>
                    <div className="input-item">
                      <label htmlFor="diagnosis">Diagnosis :</label>
                      <input type="text" />
                    </div>
                    <div className="input-item">
                      <label htmlFor="location">Location :</label>
                      <input type="text" />
                    </div>
                    <div className="input-item">
                      <label htmlFor="">Medications :</label>
                    </div>
                    <div className="medications">
                      <table className="medications-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Strength</th>
                            <th>Unit</th>
                            <th>Frequency</th>
                            <th>Duration</th>
                            <th>Instructions</th>
                            <th style={{ opacity: 0 }}>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {medicationList.map((medication, index) => {
                            return (
                              <tr key={index}>
                                <td>{medication.name}</td>
                                <td>{medication.strength}</td>
                                <td>{medication.unit}</td>
                                <td>{medication.frequency}</td>
                                <td>{medication.duration}</td>
                                <td>{medication.instructions}</td>
                                <td className="medicationRemoveBtn flex-center">
                                  <img
                                    src={medicationRemove}
                                    onClick={() => {
                                      handleRemoveMedication(index);
                                    }}
                                    alt=""
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <button className="form-btn">Add Record</button>
                    </div>
                  </form>
                  <div className="medication-form">
                    <h3>Enter Medications</h3>
                    <div className="input-item">
                      <label htmlFor="name">Name :</label>
                      <input
                        type="text"
                        value={medication.name}
                        name="name"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="strength">Strength :</label>
                      <input
                        type="text"
                        value={medication.strength}
                        name="strength"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="unit">Unit :</label>
                      <input
                        type="text"
                        value={medication.unit}
                        name="unit"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="frequency">Frequency :</label>
                      <input
                        type="text"
                        value={medication.frequency}
                        name="frequency"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="duration">Duration :</label>
                      <input
                        type="text"
                        value={medication.duration}
                        name="duration"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <div className="input-item">
                      <label htmlFor="instructions">Instructions :</label>
                      <input
                        type="text"
                        value={medication.instructions}
                        name="instructions"
                        onChange={handleMedicationInput}
                      />
                    </div>
                    <button className="form-btn" onClick={handleMedicationAdd}>
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                <div className="clinical-records">
                  <div className="records-body flex-between-center">
                    <div className="record prescription">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>
                      <img className="record-bgImg" src={pres} alt="" />
                    </div>
                    <div className="record labReport">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={labReport} alt="" />
                    </div>
                    <div className="record report">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={report} alt="" />
                    </div>

                    <div className="record labReport">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={labReport} alt="" />
                    </div>
                    <div className="record report">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={report} alt="" />
                    </div>
                    <div className="record prescription">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={pres} alt="" />
                    </div>

                    <div className="record report">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={report} alt="" />
                    </div>
                    <div className="record prescription">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={pres} alt="" />
                    </div>
                    <div className="record labReport">
                      <div className="sub-card-header flex-between-center">
                        <p>
                          <b>Doctor Name : </b>Ali Kumail
                        </p>
                        <span className="date">24/2/2023</span>
                      </div>
                      <p>
                        <b>Doctor ID : </b>HEgTj2....tyyw
                      </p>
                      <p>
                        <b>Hospital : </b>Shifa, Islamabad
                      </p>
                      <p>
                        <b>Type : </b>Prescription
                      </p>

                      <button>
                        <Link to="/recorddetail">View Detail</Link>
                      </button>

                      <img className="record-bgImg" src={labReport} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAccess;
