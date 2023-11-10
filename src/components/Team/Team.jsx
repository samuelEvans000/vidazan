// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import logo from "/assets/logo.png";
import dna from "/assets/dna.jpg";
import "./Team.css";

function Team() {

   

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="team">
        <div className="img-logo">
          <img src={logo}></img>
        </div>
        <div className="team-title">
          <h1>Our Team</h1>
        </div>
        <div className="team-mems">
          <div className="team-mem">
            <div className="mem-intro">
              <div>
                <img src={dna}></img>
              </div>
              <div>
                <h2>
                  Sri Kandimalla <br></br> Ramalaxma Reddy
                </h2>
                <p>MANAGING DIRECTOR</p>
              </div>
            </div>
            <div  className="mem-cnt">
              <p>
                Sri Kandimalla Ramlaxma Reddy garu received his master’s degree
                in pharmaceutical biotechnology at California, USA. He has been
                actively involved in biopharmaceuticals company growth and
                expansion plans for the past 12 years, and he has extensive
                knowledge in several areas of pharmaceuticals and biologics. He
                held positions of great responsibility in the fields of
                bioengineering, process development, scale-up studies, process
                validation and manufacturing operations while working for
                Bactolac Pharmaceuticals in New York and the Geoffrey Gurtner
                Laboratory at Stanford University in California, USA. Prior to
                then, he had ample experience with clinical data administration,
                the SAS program, clinical trials, and involvement in prestigious
                WHO-related projects in the USA.
              </p>
              
            </div>
          </div>
          <div className="team-mem">
            <div className="mem-intro">
              <div>
                <img src={dna}></img>
              </div>
              <div>
                <h2>Dr. Ramavath R. Naik</h2>
                <p>DIRECTOR</p>
              </div>
            </div>
            <div className="mem-cnt">
              <p>
                Dr. Ramavath R. Naik received his enterpreneurship training from
                the Indian School of Business in Hyderabad. finished his Ph.D.
                in Pharmaceutical Sciences at Osmania University and his M.S. in
                Pharmacy at the National Institute of Pharmaceutical Education
                and Research (NIPER), Mohali, Chandigarh. Since the last 15
                years, he has been actively involved in the development of
                biopharmaceutical products and the strategies for their business
                development. He is currently engaged with wide range of fields,
                including drug discovery, biopharmaceuticals, protein drug
                delivery using cutting-edge NDDS techniques, and biocatalytic
                approaches to the production of enantiopure drugs. Biosimilars.
                Innovative Novel (Nano & Micro) Formulations for Pulmonary and
                Topical Delivery and Advanced Nutraceutical Formulation
                Development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
