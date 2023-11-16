// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import dna from "/assets/dna.jpg";
import vmv from "/assets/vmv.jpg";

import "./Vision.css";

function Vision() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="vision">
          <img className="cnt-img1" src={vmv}></img>
          <h1 className="vision-title">
            <u>Our Vision</u>
          </h1>
        <div className="vision-cnt">
            <div className="vision-img2">
                <img className="cnt-img2" src={dna}></img>
            </div>
          <div className="vision-text">
          <p>
            In a line our vision is to ‘make drugs affordable to all’ With this
            vision we are moving forward with exceptional team that is striving
            hard for the quality and competitive prices.
          </p>
          <p>
            We are mostly focused on the diseases that are making the lives of
            Indians hard. Our aim is to see a healthier world and our vision to
            make the drug products that are needed for the world population as
            well as developing countries population.
          </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Vision;
