import React, { useEffect, useState, useRef } from "react";
import "../styles/Patient.css";
import Web3Modal from "web3modal";

// import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  register,
  reset,
  addAddress,
  getDataShared,
  removeDataShared,
} from "../features/auth/authSlice";

// useEffect(() => {
//   if (!user) {
//     navigate("/landing");
//   } else {
//     if (user.specialization) {
//       setUserType("Doctor");
//     } else {
//       setUserType("Patient");
//     }
//     //   dispatch(getGoals());
//   }

//   if (isError) {
//     toast.error(message);
//   }
//   console.log(isSuccess, user);
//   if (isSuccess || user) {
//     navigate("/");
//   }

//   dispatch(reset());
// }, [user, isError, isSuccess, message]);

// import { Link } from "react-router-dom";

// import logo from "../img/logo-dark.png";
// import grid from "../img/icon-grid.png";
// import record from "../img/icon-record.png";
// import history from "../img/icon-history.png";
// import user from "../img/icon-user.png";
import Sidebar from "../components/Sidebar";
import bell from "../img/icon-bell.png";

import { providers, Contract } from "ethers";
import { EHR_CONTRACT_ADDRESS, abi } from "../constants";

const Patient = () => {
  const [wallet, setWallet] = useState("");
  const [grantLoading, setGrantLoading] = useState(false);
  const [revokeLoading, setRevokeLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [dataSharedList, setDataSharedList] = useState([]);

  const web3ModalRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataShared({ token: user.token }));

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

  const { user, isLoading, isError, isSuccess, message, dataShared } =
    useSelector((state) => state.auth);

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

  // TODO web3 stuff here

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
    }
  }, [walletConnected]);

  const grantAccess = async (addr) => {
    try {
      if (addr.length === 0) {
        window.alert("Invalid Address");
        return;
      }
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      console.log("Before Call");
      const ehrContract = new Contract(EHR_CONTRACT_ADDRESS, abi, signer);
      // call the addAddressToWhitelist from the contract
      console.log("Before");

      const tx = await ehrContract.givePermission(addr);
      console.log("After Call");

      setGrantLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setGrantLoading(false);
      toast.success("Access Granted!");
      setAddress("");
      console.log("user id", user._id);
      dispatch(addAddress({ address: addr, userId: user._id }));
      dispatch(getDataShared({ token: user.token }));

      // get the updated number of addresses in the whitelist
      // await getNumberOfWhitelisted();
    } catch (err) {
      console.error(err);
    }
  };

  const revokeAccess = async (addr) => {
    try {
      if (addr.length === 0) {
        window.alert("Invalid Address");
        return;
      }
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const ehrContract = new Contract(EHR_CONTRACT_ADDRESS, abi, signer);
      // call the addAddressToWhitelist from the contract
      const tx = await ehrContract.revokePermission(addr);
      setRevokeLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setRevokeLoading(false);
      toast.success("Access Revoked!");
      setAddress("");

      // get the updated number of addresses in the whitelist
      // await getNumberOfWhitelisted();
    } catch (err) {
      console.error(err);
    }
  };

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

  function handleRevokeDataSharedWith(address) {
    console.log("handleRevokeDataSharedWith address:", address);
    // TODO : remove from Smart COntract
    // revokeAccess(address);

    // TODO : dispatch
    dispatch(removeDataShared({ token: user.token, address: address }));
    dispatch(getDataShared({ token: user.token }));
  }

  useEffect(() => {
    displayDataSharedItems();
  }, [dataShared]);

  function displayDataSharedItems() {
    const dataShareditems = [];

    if (Array.isArray(dataShared)) {
      dataShared?.forEach((element, index) => {
        dataShareditems.push(
          <div key={index} className="sub-card flex-start-col">
            <div className="sub-card-header flex-between-center">
              <p>
                <b>Doctor Name : </b>
                {element.name}
              </p>
              <span className="date">{element?.dob?.slice(0, 10)}</span>
            </div>
            <p>
              <b>Doctor ID : </b>
              {element.walletAddress}
            </p>
            <p>
              <b>Hospital : </b>
              {element?.doctor?.hospital}
            </p>
            <div className="sub-card-buttons flex-center">
              {/* <button className="btn-notification flex-center">
                {" "}
                <img src={bell} alt="" /> Notifications
              </button> */}
              <button
                onClick={() => {
                  handleRevokeDataSharedWith(element.walletAddress);
                }}
              >
                Revoke Access
              </button>
            </div>
          </div>
        );
      });
      console.log("dataShareditems", dataShareditems);
      setDataSharedList(dataShareditems);
    }
    return dataShareditems;
  }

  return (
    <div className="patient-container flex">
      <Sidebar active="patient"></Sidebar>
      <div className="portal-main-wrap">
        <div className="user-info">
          <div className="current-path"></div>
          <div className="user-info-details">
            <p className="walletAddress">{wallet}</p>
            <span>-</span>
            <p>{user?.name}</p>
          </div>
        </div>
        <div className="portal-main flex-between-start">
          <div className="portal-main-left">
            <div className="record-access card">
              <div className="card-header">
                <h3>Record Access</h3>
              </div>
              <div>
                <div className="input-item flex-between-center">
                  <label htmlFor="id">ID : </label>
                  <input
                    type="text"
                    value={address}
                    id="address"
                    name="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="record-access-btns">
                  <button
                    className="bg-red"
                    onClick={() => {
                      revokeAccess(address);
                    }}
                  >
                    {revokeLoading ? "Loading..." : "Revoke"}
                  </button>
                  <button
                    onClick={() => {
                      grantAccess(address);
                    }}
                  >
                    {grantLoading ? "Loading..." : "Grant"}
                  </button>
                </div>
              </div>
            </div>
            <div className="access-request card">
              <div className="card-header">
                <h3>Access Request</h3>
              </div>

              <div className="sub-card flex-start-col">
                <div className="sub-card-header flex-between-center">
                  <p>
                    <b>Doctor Name : </b>Ali Kumail
                  </p>
                  <span className="date">24/2/2023</span>
                </div>
                <p>
                  <b>Doctor ID : </b>
                  HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
                </p>
                <p>
                  <b>Hospital : </b>Shifa, Islamabad
                </p>
                <button>Grant Access</button>
              </div>
              <div className="sub-card flex-start-col">
                <div className="sub-card-header flex-between-center">
                  <p>
                    <b>Doctor Name : </b>Ali Kumail
                  </p>
                  <span className="date">24/2/2023</span>
                </div>
                <p>
                  <b>Doctor ID : </b>
                  HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
                </p>
                <p>
                  <b>Hospital : </b>Shifa, Islamabad
                </p>
                <button>Grant Access</button>
              </div>
              <div className="sub-card flex-start-col">
                <div className="sub-card-header flex-between-center">
                  <p>
                    <b>Doctor Name : </b>Ali Kumail
                  </p>
                  <span className="date">24/2/2023</span>
                </div>
                <p>
                  <b>Doctor ID : </b>
                  HEgTj2HP31FHPXAxxp3QUN9FhhFiPS8JTVpMLet1tyyw
                </p>
                <p>
                  <b>Hospital : </b>Shifa, Islamabad
                </p>
                <button>Grant Access</button>
              </div>
            </div>
          </div>
          <div className="portal-main-right">
            <div className="data-shared card">
              <div className="card-header">
                <h3>Data Shared With</h3>
                <p className="">Ongoing Appointments</p>
              </div>
              {dataSharedList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
