// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ImageSlider from '../imageSlider/imageSlider'
import './Formulation.css'

function Formulation() {

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
    <div className='line-container'>
        <h1>Formulation research solutions</h1>
        <div className='form-img'>
          <ImageSlider images={images}/>
        </div>
        <p>
        Innovative and advanced formulation strategies that are tailor made to our customers are offered by us. We are working at our facility and with our collaborators to develop advanced formulations for known drugs and innovative drugs. The formulation plays a key role in the acceptability by the patients. However, not all drugs can be patient friendly to be self-administered. Thus, there are continuous efforts made by researchers to develop various new formulations. We offer formulation research that is conventional as well as novel.
        </p>

    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Formulation
