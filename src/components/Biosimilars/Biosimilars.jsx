// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Biosimilars.css'


function Biosimilars() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='line-container'>
          <h1>Biosimilars</h1>
          <h2>Discovery and Development of Novel Biologics</h2>
          <p>
            Development of potential Biosimilars through our unique R&D
          </p>
          <h2>Our key therapeutic areas</h2>
          <p>
            A large and sustainable product pipeline with Biosimilars targeted towards,
            <br />
            - Diabetes,
            <br />
            - Coronary Artery diseases (CAD),
            <br />
            - Oncology, Pulmonary Fibrosis,
            <br />
            - Ophthalmology,
            <br />
            - Immunology (autoimmune diseases).
          </p>
          <h2>Validation, quality control and compliance</h2>

          <p>
            The output of our unique enzyme development and manufacturing process is the ability to transition to routine manufacture of the custom enzyme, guaranteeing the exclusive supply of a fully validated and viable enzyme upon request in scheduled time frames required for large commercial scale projects.
          </p>

          <h2>Our Pharma and Biotech products</h2>
          <p>
            Modern biotechnology is a powerful driver of innovation in the pharmaceutical industry. Our products for the Pharma and biotech industry cover a wide range of applications. Our enzymes make a valued contribution to the production of new forms of therapy, such as gene and cell therapy, as well as the synthesis of APIs. Established production processes allow even large quantities to be produced within a short time.
          </p>

          <h2>Products for Food for healthier and more sustainably produced Food</h2>
          <p>
            Our enzyme products for the food industry are used for the enzymatic production of food ingredients and additives or as process aids in the production of foods and beverages. Our goal safe and cost-effective food production to improve human health.
          </p>

          <h2>Enzymatic solutions for optimized manufacturing processes</h2>
          <p>
            Our enzyme products are capable of replacing complex chemical processes with natural Biocatalysis, for example. Our products remove undesired substances from the end product or optimize production processes.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Biosimilars
