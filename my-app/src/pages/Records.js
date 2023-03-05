import React from "react";

import "../styles/Patient.css";
import "../styles/Records.css";
import Sidebar from "../components/Sidebar";
import pres from "../img/icon-pres.png";
import report from "../img/icon-report.png";
import labReport from "../img/icon-labReport.png";

import { Link } from "react-router-dom";

const Records = () => {
  return (
    <div className="patient-container record-container flex">
      <Sidebar active="records"></Sidebar>
      <div className="portal-main flex-between-start">
        <div className="card records">
          <div className="card-header">
            <h3>Records</h3>
          </div>
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
      </div>
    </div>
  );
};

export default Records;
