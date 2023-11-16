// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./AboutUs.css";
import dna from "/assets/dna.jpg";
import ImageSlider from "../imageSlider/imageSlider";

function AboutUs() {
    const images = [
        "/assets/image1.jpg",
        "/assets/image2.jpg",
        "/assets/image3.jpg",
        "/assets/image4.jpg",
      ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="about">
        {/* <div>
        <ImageSlider images={images}/>
        </div> */}
        <div className="abt">
            <h1><u>About Us</u></h1>
        </div>
        <div className="box1">
          <div className="abt-img ">
            <img src={dna}></img>
          </div>
          <div className="abt-text">
            <p>
              A Biotech Company with a global presence, VidaZan Manufactures
              Specialty Enzymes, Biosimilars and Biobetters, Active Pharma
              Ingredients(API), Bulk drugs, and Speciality Chemicals on a large,
              medium and small scale for a number of sectors through Biological
              approaches. Biocatalysts have created Bio-based Value for our
              Customers using a wide spectrum of its Technological, Commercial,
              and Regulatory skills.
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="abt-img ">
            <img src={dna}></img>
          </div>
          <div className="abt-text">
            <p>
              VidaZan is focused on treating patients with the most
              difficult-to-treat cancers, for which conventional therapies have
              failed. To that end, we have created a deep pipeline of
              differentiated and novel investigational oncology therapeutic
              candidates that target some of the most critical pathways that
              cancer cells use to grow. Drug discovery in therapeutic areas of
              oncology, Inflammatory and metabolic diseases. We have Pipeline of
              Differentiated and Novel Investigational Oncology Therapeutic
              Candidates, Including Protein Degradation Technology and
              Inhibitors of most Critical Pathways.
            </p>
          </div>
        </div>
        <div className="box3">
          <div className="abt-img ">
            <img src={dna}></img>
          </div>
          <div className="abt-text">
            <p>
              We have been progressing in Neutraceutical based Novel
              Formulations to improve their Pharmacokinetic and Pharmacodynamics
              properties of potential natural products. These Novel Formulations
              are explored for prevention and therapeutic management of
              different types of Cancers, Cardiovascular diseases mainly Heart
              Attacks, Immunostimulation, and Diabetes and associated
              complications. We are also developing Novel Inhalational and
              topical formulations for treatment of Respiratory, Dermal disease
              and other all types of health issues.
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="abt-img ">
            <img src={dna}></img>
          </div>
          <div className="abt-text">
            <p>
              Our another important line of activity is Bio-catalysis and
              Biotransformation approaches for the development of API or API
              Intermediates: We have been working on the Process development
              approaches for API and Intermediates through Enzyme screening,
              Biotransformation process development using whole cell, Gene
              cloning and Modifications, Immobilization of expressed Enzymes,
              Process development, Custom Chiral Synthesis, Enzyme Activity and
              Enantioselectivity Improvement. Though these approach, we will be
              producing highly pure APIs with affordable costs in
              Environmentally Friendly Methods.
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

export default AboutUs;
