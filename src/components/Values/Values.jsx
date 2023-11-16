// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import dna from "/assets/dna.jpg";
import vmv from "/assets/vmv.jpg";
import "./Values.css";

function Values() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="vision">

        <img className="cnt-img1" src={vmv}></img>
          <h1 className="vision-title">
            <u>Our Values</u>
          </h1>
        <div className="vision-cnt">
          <div className="vision-img2">
            <img className="cnt-img2" src={dna}></img>
          </div>
          <div className="vision-text">
            <p>
              Our company works with a social responsibility that focuses on
              improving the health of Indian population especially and rest of
              the world as well.
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

export default Values;
