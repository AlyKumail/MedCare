import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";

import logo from "../img/logo-dark.png";
import grid from "../img/icon-grid.png";
import record from "../img/icon-record.png";
// import history from "../img/icon-history.png";
import user from "../img/icon-user.png";

const Sidebar = ({ active, isDoctorDashboard = false }) => {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change network to Goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <div className="logo">
          <img src={logo} alt="" />
          {console.log(isDoctorDashboard)}
        </div>
        {isDoctorDashboard ? (
          <div className="navlinks">
            <div className="link flex-center">
              <img src={grid} alt="" />
              <Link
                to="/doctor"
                className={active == "doctor" ? "link-active" : ""}
              >
                Dashboard
              </Link>
            </div>
            <div className="link flex-center">
              <img src={record} alt="" />
              <Link
                to="/patients"
                className={active == "patients" ? "link-active" : ""}
              >
                Patients
              </Link>
            </div>
            <div className="link flex-center">
              <img src={user} alt="" />
              <Link className={active == "profile" ? "link-active" : ""}>
                History
              </Link>
            </div>
            <div className="link flex-center">
              <img src={user} alt="" />
              <Link className={active == "profile" ? "link-active" : ""}>
                Profile
              </Link>
            </div>
          </div>
        ) : (
          <div className="navlinks">
            <div className="link flex-center">
              <img src={grid} alt="" />
              <Link
                to="/patient"
                className={active == "patient" ? "link-active" : ""}
              >
                Dashboard
              </Link>
            </div>
            <div className="link flex-center">
              <img src={record} alt="" />
              <Link
                to="/records"
                className={active == "records" ? "link-active" : ""}
              >
                View Records
              </Link>
            </div>
            <div className="link flex-center">
              <img src={user} alt="" />
              <Link
                to="/profile"
                className={active == "profile" ? "link-active" : ""}
              >
                Profile
              </Link>
            </div>
          </div>
        )}

        <div className="connect">
          <Link className="btn-connect">Connect Wallet</Link>
        </div>
        <div className="logout">
          <Link to="/" className="btn-logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
