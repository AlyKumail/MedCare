import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const UserInfo = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const [wallet, setWallet] = useState("");

  const { user, isLoading, isError, isSuccess, message, isWalletConnected } =
    useSelector((state) => state.auth);

  useEffect(() => {
    console.log("rannn");
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
  }, [isWalletConnected]);

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

  return (
    <div className="user-info-details">
      <p className="walletAddress">{wallet}</p>
      <span>-</span>
      <p>{user?.name}</p>
    </div>
  );
};

export default UserInfo;
