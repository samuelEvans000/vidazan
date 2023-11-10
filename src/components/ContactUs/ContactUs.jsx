// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import fb from "/assets/fb.svg";
import g from "/assets/g.svg";
import t from "/assets/t.svg";
import y from "/assets/y.svg";

import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="info">
          <div className="info-cnt">
            <h3>LOCATION</h3>
            <p>
              VIDAZAN PHARMA PVT LTD <br></br> # 4-7-18/1/A/7, FIRST FLOOR,{" "}
              <br></br> Raghavendra Nagar, Nacharam, <br></br> Hyderabad,
              Telangana – 500076.
            </p>
          </div>
          <div className="info-cnt">
            <h3>CONTACT US</h3>
            <p>Phone：+914035160994</p>
            <p>Email : info@vidaZanpharma.com</p>
          </div>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div className="icons">
            <div className="icon1">
              <img src={fb}></img>
            </div>
            <div className="icon">
              <img src={g}></img>
            </div>
            <div className="icon">
              <img src={t}></img>
            </div>
            <div className="icon">
              <img src={y}></img>
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

export default ContactUs;
