// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import dna from "/assets/dna.jpg";
import vmv from "/assets/vmv.jpg";
import "./Mission.css";

function Mission() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="vision">
        <div className="vision-img">
          <img src={dna}></img>
          <h1 className="vision-title">
            <u>Our Mission</u>
          </h1>
        </div>
        <img className="cnt-img1" src={vmv}></img>
        <div className="vision-cnt">
          <div>
            <img className="cnt-img2" src={dna}></img>
          </div>
          <div className="vision-text">
            <p>
              Delivering medication to the population in need is the goal.
              Particularly, we are concentrating on diseases that impact the
              people of India and third-world nations, such as Covid 19, Cancer,
              AIDS, Coronary artery disorders, Neurological disorders, Gastro,
              Pulmonary disorders, malaria, dengue, diabetes, and tuberculosis.
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

export default Mission;
