import React from "react";

import "../styles/Process.css";

import borderLeft from "../img/border-left.png";
import borderLeftSmall from "../img/borderl-left-small.png";

const Process = () => {
  return (
    <section class="process-container">
      <div id="process" class="process">
        <span class="black-tag">Process</span>

        <div class="process-header flex-between-start">
          <h4>Implementation Journey.</h4>
          <p>
            No matter what RFID solution you require, rest assured that Makamat
            has got you covered. The operational process we follow with our
            clients is guaranteed to be catered to their very own operational
            needs.
          </p>
        </div>

        <div class="desktop">
          <div class="process-body">
            <div class="process-body-top flex-between-center">
              <div class="process-body__item ">
                <img class="border-left" src={borderLeft} alt="" />
                <div class="process-img">
                  {/* <img src="./images/icon-headphone.png" alt=""> */}
                </div>
                <h6>Consultation Services</h6>
                <p>
                  Our team of RFID experts can provide you with program
                  management. This type of management is meant to help improve
                  your organization’s performance.
                </p>
              </div>
              <div class="process-body__item">
                <img class="border-left" src={borderLeft} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-pen.png" alt=""> */}
                </div>
                <h6>Design</h6>
                <p>
                  Our team of experts will take their time designing your new
                  solution’s formula before finally moving to manufacturing and
                  supplying its physical elements.
                </p>
              </div>
              <div class="process-body__item">
                <img class="border-left" src={borderLeft} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-drive.png" alt=""> */}
                </div>
                <h6>Supply</h6>
                <p>
                  Our vendors will undertake the project and hand over the
                  finished supplies that are essential to your project in no
                  time.
                </p>
              </div>
              <div class="process-body__item">
                <img class="border-left" src={borderLeft} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-judge.png" alt=""> */}
                </div>
                <h6>Installation</h6>
                <p>
                  The next step is to implement and document how the process has
                  been turning out.Finally, we start testing the system to see
                  if it is working properly.
                </p>
              </div>
            </div>
            <div class="process-body-bottom flex-between-center">
              <div class="process-body__item">
                <img class="border-left-small" src={borderLeftSmall} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-book.png" alt=""> */}
                </div>
                <h6>Training</h6>
                <p>
                  We begin by training your staff in operating and maintaining
                  the system that is deployed.
                </p>
              </div>
              <div class="process-body__item">
                <img class="border-left-small" src={borderLeftSmall} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-wheel.png" alt=""> */}
                </div>
                <h6>Service & Maintenance</h6>
                <p>
                  During our routine checkups, we will provide your RFID systems
                  with the maintenance they need for their upkeep.
                </p>
              </div>
              <div class="process-body__item">
                <img class="border-left-small" src={borderLeftSmall} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-safety.png" alt=""> */}
                </div>
                <h6>Warranty</h6>
                <p>
                  We will offer you an extended warranty that guarantees the
                  proper continuity of your operations once we are done with
                  your new RFID system.
                </p>
              </div>
              <div class="process-body__item display-none">
                <img class="border-left" src={borderLeft} alt="" />

                <div class="process-img">
                  {/* <img src="./images/icon-judge.png" alt=""> */}
                </div>
                <h6>Consultation Services</h6>
                <p>
                  Our team of RFID experts can provide you with program
                  management. This type of management is meant to help improve
                  your organization’s performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="tablet">
          <div class="process-body">
            <span class="mobile-left-dashed-border"></span>
            <div class="process-body-row flex-between-start">
              {/* <img class="process-border-right process-t-18 mobile-hide" src="./images/process-border-right1.png" alt=""> */}
              <div class="process-body__item ">
                <div class="process-img-wrap flex-center">
                  <div class="process-img">
                    {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line.png" alt=""> */}
                    {/* <img class="process-icon" src="./images/icon-headphone.png" alt=""> */}
                  </div>
                  {/* <img class="border-dotted mobile-hide" src="./images/dashed-border-filled1.png" alt=""> */}
                </div>
                <h6>Consultation Services</h6>
                <p class="pd-r-5">
                  Our team of RFID experts can provide you with program
                  management. This type of management is meant to help improve
                  your organization’s performance.
                </p>
              </div>
              <div class="process-body__item ">
                <div class="process-img flex-center">
                  <span class="empty-dot mobile-hide"></span>
                  {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line-empty.png" alt=""> */}
                  {/* <img src="./images/icon-pen.png" alt=""> */}
                </div>
                <h6>Design</h6>
                <p class="pd-r-2">
                  Our team of experts will take their time designing your new
                  solution’s formula before finally moving to manufacturing and
                  supplying its physical elements.
                </p>
              </div>
            </div>

            <div class="process-body-row flex-between-start">
              <img class="border-left" src={borderLeft} alt="" />

              <div class="process-body__item ">
                <div class="process-img-wrap flex-center">
                  <div class="process-img">
                    {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line.png" alt=""> */}
                    {/* <img class="process-icon" src="./images/icon-judge.png" alt=""> */}
                  </div>
                  {/* <img class="border-dotted mobile-hide" src="./images/dashed-border-filled1.png" alt=""> */}
                </div>
                <h6>Installation</h6>
                <p class="pd-r-5">
                  The next step is to implement and document how the process has
                  been turning out.Finally, we start testing the system to see
                  if it is working properly.
                </p>
              </div>
              <div class="process-body__item ">
                <div class="process-img flex-center">
                  {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line-empty.png" alt=""> */}

                  <span class="empty-dot mobile-hide"></span>
                  {/* <img src="./images/icon-drive.png" alt=""> */}
                </div>
                <h6>Supply</h6>
                <p class="pd-r-2">
                  Our vendors will undertake the project and hand over the
                  finished supplies that are essential to your project in no
                  time.
                </p>
              </div>
            </div>

            <div class="process-body-row flex-between-start">
              {/* <img class="process-border-right process-t-18 mobile-hide" src="./images/process-border-right1.png" alt=""> */}
              <div class="process-body__item ">
                <div class="process-img-wrap flex-center">
                  <div class="process-img">
                    {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line.png" alt=""> */}
                    {/* <img class="process-icon" src="./images/icon-book.png" alt=""> */}
                  </div>
                  {/* <img class="border-dotted mobile-hide" src="./images/dashed-border-filled1.png" alt=""> */}
                </div>
                <h6>Training</h6>
                <p class="pd-r-5">
                  We begin by training your staff in operating and maintaining
                  the system that is deployed.
                </p>
              </div>
              <div class="process-body__item ">
                <div class="process-img flex-center">
                  {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line-empty.png" alt=""> */}
                  <span class="empty-dot mobile-hide"></span>
                  {/* <img src="./images/icon-wheel.png" alt=""> */}
                </div>
                <h6>Service and Maintenance</h6>
                <p class="pd-r-2">
                  During our routine checkups, we will provide your RFID systems
                  with the maintenance they need for their upkeep.
                </p>
              </div>
            </div>

            <div class="process-body-row flex-between-start">
              <div class="process-body__item display-none mobile-hide">
                <div class="process-img-wrap flex-center">
                  <div class="process-img">
                    {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line-empty.png" alt=""> */}
                    {/* <img class="process-icon" src="./images/icon-headphone.png" alt=""> */}
                  </div>
                  {/* <img class="border-dotted" src="./images/dashed-border-filled.png" alt=""> */}
                </div>
                <h6>Consultation Services</h6>
                <p class="pd-r-5">
                  Our team of RFID experts can provide you with program
                  management. This type of management is meant to help improve
                  your organization’s performance.
                </p>
              </div>
              <div class="process-body__item ">
                <div class="process-img flex-center">
                  {/* <img class="mobile-process-line desktop-hide" src="./images/mobile-process-left-line.png" alt=""> */}
                  {/* <img src="./images/icon-safety.png" alt=""> */}
                </div>
                <h6>Warranty</h6>
                <p>
                  We will offer you an extended warranty that guarantees the
                  proper continuity of your operations once we are done with
                  your new RFID system.
                </p>
              </div>
            </div>
          </div>
          <a href="#contact" class="btn btn-medium desktop-hide">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
