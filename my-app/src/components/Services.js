import React from "react";
import "../styles/Services.css";

import simg1 from "../img/network.png";
import simg2 from "../img/owner-key.png";
import simg3 from "../img/proof-of-work.png";

const Services = () => {
  return (
    <section id="solution" class="solution-container">
      <div class="solution">
        <span class="black-tag">Solution</span>

        <div class="solution-header flex-between-center">
          <h2>Find out how MedCare helps you fulfill your daily needs.</h2>
        </div>

        <div class="solution-body flex-between-center">
          <div class="solution-body__item">
            <div class="solution-body__item-image flex-between-center">
              <img src={simg1} alt="" />
            </div>
            <div class="solution-body__item-text">
              <h5>Enhanced Security</h5>
              <p>
                Blockchain's cryptographic algorithms and decentralized nature
                make EHR data tamper-resistant. Each transaction or record added
                to the blockchain is encrypted and linked to the previous
                record, creating an unchangeable chain of information.
              </p>
            </div>
          </div>
          <div class="solution-body__item">
            <div class="solution-body__item-image">
              <img src={simg2} alt="" />
            </div>
            <div class="solution-body__item-text">
              <h5>Privacy Control</h5>
              <p>
                Blockchain enables patients to have greater control over their
                data. With patient consent, healthcare providers or authorized
                individuals can access specific portions of the patient's EHR,
                ensuring privacy and data ownership rights.
              </p>
            </div>
          </div>
          <div class="solution-body__item">
            <div class="solution-body__item-image">
              <img src={simg3} alt="" />
            </div>
            <h5>Data Integrity and Accuracy</h5>
            <p>
              Blockchain ensures the immutability and integrity of EHR data.
              Once recorded on the blockchain, data cannot be altered without
              consensus from the network participants, reducing the risk of
              errors or fraudulent activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
