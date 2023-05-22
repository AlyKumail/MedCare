import React from "react";
import "../styles/Works.css";

import signalLeft from "../img/signal-left.png";
import signalRight from "../img/signal-right1.png";
import work1 from "../img/works1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";

const Works = () => {
  return (
    <section class="works-container">
      <div id="works" class="works">
        <span class="black-tag">How it works</span>
        <div class="works-header flex-between-start">
          <h2>See how data is stored in MedCare</h2>
        </div>

        <div class="works-body flex-between-start">
          <div class="works-body-item flex-center-col">
            <div class="works-img-upper works-img">
              <img class="tag" src={work1} alt="" />
            </div>
            <h6>1. Record Entered in System</h6>
            <p>
              Doctor Enter a Medical Record to corresponding Patient, after
              Patient give access to Doctor.
            </p>
          </div>
          <div class="works-body-item flex-center-col m-5">
            {/* <!-- <img class="works-signals" src="./images/works-signals.png" alt=""> --> */}
            <div class="works-img">
              {/* <img class="signal-left mobile-hide" src={signalLeft} alt="" /> */}

              <img class="tag" src={work2} alt="" />

              {/* <img class="signal-left mobile-hide" src={signalRight} alt="" /> */}
            </div>
            <h6>2. Record Stored in IPFS</h6>
            <p>
              The medical record is stored as a json format into IPFS storage
              and IPFs return back a hash value for corresponding medical
              record.
            </p>
          </div>
          <div class="works-body-item flex-center-col">
            <div class="works-img">
              <img class="tag" src={work3} alt="" />
            </div>
            <h6>3. Hash Stored in Smart Contract</h6>
            <p>
              After the hash is returned from IPFS, it is stored on Smart
              Contract on Blockchain against corresponding Patient's record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
