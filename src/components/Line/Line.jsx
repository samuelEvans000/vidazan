import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Line.css'
import dna from '/assets/dna.jpg'

function Line() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='line-container'>
          <h1>Line of Activity</h1>
          <div className='line-img1'>
          <img src={dna}></img>
          <img src={dna}></img>
          </div>
          <h2>Discovery</h2>
          <p>
            Enzyme discovery marks the start of the journey for Novel Enzyme Development. Our low-risk concept starts with fully understanding your needs and processes, before identifying the appropriate gene sequence to perform an initial proof-of-concept fermentation of your new enzyme. As an Enzyme Development and Manufacturing Company, our overall aim is to partner with you towards a continuous supply of your desired Novel Enzyme at the right price.
          </p>
          <h2>Bioinformatics, Cloning & Metagenomics</h2>
          <div className='line-img2'>
          <img src={dna}></img>
          </div>
          <p>
            Find the right Enzyme for your process by using Biocatalysts’ in-house Enzyme Discovery Technology
          </p>
          <h2>Enzyme samples</h2>
          <div className='line-img3'>
          <img src={dna}></img>
          <img src={dna}></img>
          </div>
          <p>
            Biocatalysts can turn a concept into a reality by delivering a sample of active, soluble enzyme along with a technical summary and specification.
          </p>
          <h2>Fermentation development and optimisation</h2>
          <p>
            Our focus in the development phase is on producing the maximum possible enzyme titre, purity, and yield. Now that the enzyme has been shown to perform as expected, the final stage involves making the product fit your commercial requirements.
          </p>
          <h2>Scale-up to Manufacture</h2>
          <div className='line-img4'>
          <img src={dna}></img>
          </div>
          <p>
            The enzyme landscape is complex. We support our customers in ensuring their exclusive enzyme is compliant for their appropriate commercial uses.
          </p>
          <h2>Small Molecules</h2>
          <div className="flex-container">
          <div className='samll-mole-container'>

            <h3>Biologics</h3>
            <div className='line-img5'>
          <img src={dna}></img>
          </div>
            <p>Integrated Drug Discovery</p>
          </div>
          <div className='samll-mole-container'>

            <h3>Drug Metabolites</h3>
            <div className='line-img5'>
          <img src={dna}></img>
          </div>
            <p>Peptides, Olegonucleotides, Antibody Drug Conjugates, PRPTAC, CAR-T, PDNA& mRNA, Rare Orphan Diseases</p>
          </div>
            <div className='samll-mole-container'>

            <h3>Industries and Emerging Biopharma</h3>
            <div className='line-img5'>
          <img src={dna}></img>
          </div>
            <p>Animal Health, Pharma Biotech, Agrochemical, Nutrition, Specialty Materials.</p>
            </div>
          </div>
          <h2>Discovery</h2>
          <p>
            Chemical, Biological, Competition & Data Science
          </p>
          <h2>Development</h2>
          <div className='line-img6'>
          <img src={dna}></img>
          </div>
          <p>
            Chemical Development, Formulation Development, Clinical Development
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Line
