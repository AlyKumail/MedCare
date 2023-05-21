import React, { useState, useEffect } from "react";

import "../styles/Patient.css";
import "../styles/Doctor.css";
import Sidebar from "../components/Sidebar";

import UserInfo from "../components/UserInfo";

import totalAppointment from "../img/total-appointment.png";
import totalPatient from "../img/total-patient.png";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";

const Doctor = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const [wallet, setWallet] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // setWallet(window.ethereum)
    if (window.ethereum.selectedAddress) {
      const walletAddress =
        "0x" +
        window.ethereum.selectedAddress.slice(0, 5) +
        "......" +
        window.ethereum.selectedAddress.slice(-5);
      setWallet(walletAddress);
    } else {
      setWallet("0xnull");
    }
    const isCon = isConnected();
    setWalletConnected(isCon);
  }, []);

  async function isConnected() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    console.log(accounts.length);
    if (accounts.length !== 0) {
      console.log("IN TRUE");

      // console.log(`You're connected to: ${accounts[0]}`);
      setWalletConnected(true);
      return true;
    } else {
      console.log("IN FALSE");

      // console.log("Metamask is not connected");
      setWalletConnected(false);

      return false;
    }
  }

  useEffect(() => {
    if (!user) {
      console.log("no user");
      navigate("/landing");
    } else {
      console.log("yes user");

      // if (user.specialization) {
      //   setUserType("Doctor");
      // } else {
      //   setUserType("Patient");
      // }
      //   dispatch(getGoals());
    }

    if (isError) {
      toast.error(message);
    }
    console.log(isSuccess, user);
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="patient-container doctor-container flex">
      <Sidebar isDoctorDashboard={true} active="doctor"></Sidebar>
      <div className="portal-main">
        <div className="user-info">
          <div className="current-path"></div>
          <UserInfo></UserInfo>
        </div>
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
