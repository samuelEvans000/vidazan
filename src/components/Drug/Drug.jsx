// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Drug.css'
import Dd1 from "/assets/Dd1.jpg";
import Dd2 from "/assets/Dd2.jpg";
import Dd3 from "/assets/Dd3.jpg";
import Dd4 from "/assets/Dd4.jpg";


function Drug() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='line-container'>
    <h2>Drug discovery research solutions </h2>
    <div className='drug-img1'>
        <img src={Dd1}></img>
    </div>
        <p>
        Drug discovery requires multiple research phases to discover a new drug product. There are various stages at which we can offer services to our clients. We offer services from analysis to clinical studies. Our team of scientists are engaged in various phases of drug discovery research and these services are offered to other companies as well.
        </p>
    </div>
    <div className='drug-img2'>
        <img src={Dd2}></img>
        <img src={Dd3}></img>
        <img src={Dd4}></img>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Drug
