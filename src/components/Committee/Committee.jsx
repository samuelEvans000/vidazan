// import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ImageSlider from '../imageSlider/imageSlider'
import dna from '/assets/dna.jpg'
import './Committee.css'

function Committee() {
    const images = [
        "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/pul2.jpg",
    ];

    return (
        <>
            <div>
                <Navbar />
            </div>
                <div className='im-sl'>
                    <ImageSlider images={images} />
                </div>
            <div className='committee'>
                <div className='com-title'>
                    <h1>Our Committee</h1>
                </div>
                <div className='com-mems'>
                    <div className='com-mem'>
                        <img src={dna} alt="Member 1" />
                        <h2>Prof.Dr.BDP Kalakumar</h2>
                    </div>
                    <div className='com-mem'>
                        <img src={dna} alt="Member 2" />
                        <h2>Prof.Nilanjan Roy</h2>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Committee
