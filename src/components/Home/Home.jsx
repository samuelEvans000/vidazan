// import React from 'react'
import "./Home.css";
import dna from "/assets/dna.jpg";
import ImageSlider from "../imageSlider/imageSlider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
  ];

 

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="home">
      <div className="intro">
        <div className="dna-img">
        <img src={dna}></img>
        </div>
        <div className="img-text">
        <p >
          A Biotech Company with a Global Presence, VidaZan Manufactures
          Specialty Enzymes, API's and Biologics on Large, Medium and Small
          scales for a number of sectors. Biocatalysts have created Bio-based
          Value for our customers using a wide spectrum of its Technological,
          Commercial, and Regulatory skills.
        </p>
        </div>
      </div>
      <div className="img-container">
        <ImageSlider images={images} />
      </div>
      <div className="last">
        <h1><u>Vision & Mission</u></h1>
      </div>
      <div className="last-container">
        <div className="box">
        <div className="box-img">
          <img src={dna}></img>
          </div>
          <div className="content">
            <h4>Our Vision</h4>
            <p>We strive to make all the drugs affordable to all.</p>
            
            <Link to='/our-vision'>
              <button className="read">Read More</button>
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
          <img src={dna}></img>
          </div>
          <div className="content">
            <h4>Our Mission</h4>
            <p>VidaZan gives a complete solution for R&D needs.</p>
            <Link to='/our-mission'>
              <button className="read">Read More</button>
            </Link>
          </div>
        </div>
        <div className="box">
        <div className="box-img">
          <img src={dna}></img>
          </div>
          <div className="content">
            <h4>Our Values</h4>
            <p>We are committed to serve with high quality and low price.</p>
            <Link to='/our-values'>
              <button className="read">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
