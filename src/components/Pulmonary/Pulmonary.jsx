// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Pulmonary.css'
import pul1 from "/assets/pul1.jpg";
import pul2 from "/assets/pul2.jpg";
import img1 from '/assets/img1.jpg'



function Pulmonary() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='line-container'>
        <h2>Pulmonary Drug delivery</h2>
        <ul className='ui-container'>
          <li>
          Diseases: ARDS, COVID-19, Asthma, COPD, Pulmonary Fibrosis, TB and Leprosy
          </li>
          <li>
          Localized delivery into lungs though inhalation would directly target the disease area, while avoiding the systemic exposure
          </li>
          <li>
          Can control the spread of infectious diseases, while protecting from severe lung conditions
          </li>
          <li>Attempts will be made to develop innovative inhalational products</li>
          <li>
          Inhalation dosage forms or inhalation preparations refer to any drug product or drug solution taken via the inhalation route of administration (the nasal or respiratory route). Inhalation dosage forms are intended to deliver drug substances to the lungs. These inhaled dosage forms for drug delivery to the lungs affect pulmonary function or treat allergic symptoms in the respiratory tract. Inhalation preparations are generally formulated as solutions, suspensions, and powders.
          </li>
          <li>
          These solution, suspension, and powder formulations are delivered to the respiratory tract via drug delivery devices like aerosols, dry powder inhalers (DPI), metered dose inhalers (MDI), and nebulizers, amongst other devices. Inhalation preparations are most commonly used to treat respiratory ailments such as asthma, chronic bronchitis, emphysema, and bronchiectasis.
          </li>
        </ul>
    </div>
    <div className='pulm-img1'>
        <img src={pul1}></img>
        <img src={pul2}></img>
        <img src={img1}></img>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Pulmonary
