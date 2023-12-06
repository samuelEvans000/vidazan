// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Careers.css'

function Careers() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='career-container'>
        <p>
        Our knowledgeable team, driven by their dedication to achieving excellence, has played a vital role in the success of Vidazan Therapeutics. We prioritize the holistic development of our employees, recognizing that a sense of enjoyment and fulfillment is crucial for optimal performance. To foster this, we strive to create a positive and supportive work environment that ignites and sustains their drive to excel.
        </p>

        <p>
        At Vidazan Therapeutics, we periodically organize a range of social events and celebrations to enhance the quality of life. If you are interested in joining our team, kindly provide us with your credentials below. We will contact you if there is a suitable position available that matches your skills. Alternatively, you may also send your CV and cover letter to our contact email -   
        <a href="mailto:vzantherapeutics@gmail.com"> vzantherapeutics@gmail.com</a>
        </p>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Careers
