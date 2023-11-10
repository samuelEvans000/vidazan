// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Biocatalysis from './components/Biocatalysis/Biocatalysis';
import Biosimilars from './components/Biosimilars/Biosimilars';
import Careers from './components/Careers/Careers';
import Line from './components/Line/Line';
import Formulation from './components/Formulation/Formulation';
import ContactUs from './components/ContactUs/ContactUs';
import Vision from './components/Vision/Vision';
import Mission from './components/Mission/Mission';
import Values from './components/Values/Values';
import Team from './components/Team/Team';
import Committee from './components/Committee/Committee';
import Drug from './components/Drug/Drug';
import Pulmonary from './components/Pulmonary/Pulmonary';

// import Home from './components/Home/Home'


function App() {


  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/biocatalysis" element={<Biocatalysis />} />
          <Route path="/biosimilars" element={<Biosimilars />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/line-of-activity" element={<Line />} />
          <Route path="/formulation-reasearch-solutions" element={<Formulation />} />
          <Route path="/contact-Us" element={<ContactUs />} />
          <Route path="/our-vision" element={<Vision />} />
          <Route path="/our-mission" element={<Mission />} />
          <Route path="/our-values" element={<Values />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/our-committee" element={<Committee />} />
          <Route path="/drug-discovery-research-solutions" element={<Drug />} />
          <Route path="/pulmonary-drug-delivery" element={<Pulmonary />} />


        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
