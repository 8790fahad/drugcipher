import React from "react";
import "./RoadMap.css";
export default function RoadMap() {
  return (
    <div className="whole_road_map" style={{ paddingBottom: 100 }}>
      <div className="text-center" style={{ marginTop: 70, paddingTop: 50 }}>
        <h1 className="heading_two">Road Map</h1>
      </div>
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block" >
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Build DrugCipher Smart Contract</h2>
            <p>
              Building DrugCipher Smart Contract
              Lauch DrugCipher Testnet
              UI/UX Design
              Launch Drugcipher Mainnet
              Drugcipher Airdrop
              Performance and feature improvement.
            </p>
            {/* <span className="cd-date">29th September, 2021</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>
          <div className="cd-timeline-content">
            <h2>Complete The Workflow and Technical Test</h2>
            <p>
              Finalize UI/UX Version 1.0
              Experience Improvement
              Artificial Intelligence Model
              Mobile App Development.
            </p>
            {/* <span className="cd-date">10th December, 2021</span> */}
          </div>
        </div>
        <div className="cd-timeline-block" >
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Preparing Marketing Materials</h2>
            <p>
              In this phase, marketing and branding the application will begin
              to take place by having business cards, flyers, adverts, funnel
              page and sponsored posts.
            </p>
            {/* <span className="cd-date">11th February, 2022</span> */}
          </div>
        </div>

        <div className="cd-timeline-block" >
          <div className="cd-timeline-img cd-location"></div>
          <div className="cd-timeline-content">
            <h2>Smart contract audit</h2>
            <p>
              So, this phase is to audit our smart contract and make sure its
              stable.
            </p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location"></div>
          <div className="cd-timeline-content">
            <h2>Partnership 2022</h2>
            <p>
              In this phase, we will have partnerships with various government/ non-governmental organizations regulating pharmaceutical industries across the globe.
            </p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>
          <div className="cd-timeline-content">
            <h2>Launching. January 2023</h2>
            <p>
              In this phase, we are going to launch the product into the market for pharmaceutical companies to register and upload their drug information. And for the patient to validate the drug and earn.

            </p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
      </section>
    </div>
  );
}
