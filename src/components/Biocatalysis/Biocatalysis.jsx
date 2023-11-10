// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Biocatalysis.css";
import dna from "/assets/dna.jpg";

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
          <img src={dna}></img>
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
          <ul>
            <li>Enzymes are efficient chiral catalysts</li>
            <li>Chemo-, regio- and enantioselectivity</li>
            <li>Mild conditions</li>
            <li>Catalyze broad spectrum of reactions</li>
            <li>Environmentally acceptable</li>
          </ul>
        </div>
        <div className="biocat-imgs">
          <div className="biocat-img2">
            <img src={dna}></img>
          </div>
          <div className="biocat-img2">
            <img src={dna}></img>
          </div>
        </div>
        <div className="biocat-cnt2">
          <p>
            ❈ Chemical synthesis of achiral building blocks and Biocatalytic
            synthesis of Active Pharmaceutical Intermediates
          </p>
          <p>❈ Improvement of Biocatalyst activity </p>
          <ul>
            <li>Directed evolution biocatalysts</li>
            <li>Rational design, </li>
            <li>
              Environmental engineering approaches and physical stabilization
              strategies
            </li>
          </ul>
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
