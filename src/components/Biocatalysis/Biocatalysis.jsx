// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Biocatalysis.css";

import bioc1 from "/assets/biocatalyst.jpg";
import bioc2 from "/assets/Bio betters.jpg";
import F1 from "/assets/F1.jpg";



function Biocatalysis() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="biocatalysis">
        <div className="biocat-title">
          <h1>Biocatalysis</h1>
        </div>
        <div className="biocat-img1">
          <img src={bioc1}></img>
        </div>
        <div className="biocat-cnt-t">
          <h3>
            <u>Biocatalytic approaches to synthesis of enantiopure drugs</u>
          </h3>
        </div>
        <div className="biocat-cnt1">
          <p>
            ❈ Involves the use of biological systems (whole cells/pure enzymes)
            to produce organic compounds
          </p>
          <p>❈ It has many advantages over chemical synthesis</p>
          <p>❈ Enzymes are efficient chiral catalysts</p>
          <p>❈ Chemo-, regio- and enantioselectivity</p>
          <p>❈ Mild conditions</p>
          <p>❈ Catalyze broad spectrum of reactions</p>
          <p>❈ Environmentally acceptable</p>

        </div>
        <div className="biocat-imgs">
          <div className="biocat-img2">
            <img src={bioc2}></img>
          </div>
          <div className="biocat-img2">
            <img src={F1}></img>
          </div>
        </div>
        <div className="biocat-cnt2">
          <p>
            ❈ Chemical synthesis of achiral building blocks and Biocatalytic
            synthesis of Active Pharmaceutical Intermediates
          </p>
          <p>❈ Improvement of Biocatalyst activity </p>
          ❈ Directed evolution biocatalystsRational design, 
              Environmental engineering approaches and physical stabilization
              strategies
          
          <p>
          ❈ Optimization of the process parameters for the biocatalyst
            production (shake flask as well as bioreactor level) and their
            subsequent use (free/ immobilized/CLEA on suitable support) for
            various biotransformation reactions.{" "}
          </p>
          <p>❈ Cloning and expression of novel candidate genes for the enzyme expression in suitable vectors </p>
          <p>❈ Purification and characterization of the individual proteins. </p>
          <p>❈ Subsequent high-cell density fermentation for the production pharmaceuticals and Biochemicals.</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Biocatalysis;
