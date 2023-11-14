// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Drug.css'
import dna from '/assets/dna.jpg'

function Drug() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='line-container'>
    <h2>Drug discovery research solutions </h2>
    <div className='drug-img1'>
        <img src={dna}></img>
    </div>
        <p>
        Drug discovery requires multiple research phases to discover a new drug product. There are various stages at which we can offer services to our clients. We offer services from analysis to clinical studies. Our team of scientists are engaged in various phases of drug discovery research and these services are offered to other companies as well.
        </p>
    </div>
    <div className='drug-img2'>
        <img src={dna}></img>
        <img src={dna}></img>
        <img src={dna}></img>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Drug
