import React from 'react';
import image from '../../../assets/home/desktop/image-hero-phone.png';

export default function HomeHeading() {
  return (
    <section className='homeCaption position-relative px-3 px-lg-5 my-3 pt-5 py-lg-0 rounded-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center'>
        <div className='text-white text-center text-lg-start'>
            <h2 className='mb-0'>Award-winning custom</h2>
            <h2 className='mb-0'>designs and digital</h2>
            <h2 className=''>branding solutions</h2>
            <p className='small paragWidth mx-auto ms-lg-0 py-2'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className='darkBtn rounded-2 position-relative learnMoreBtn'>LEARN MORE</button>
        </div>
        <div className='text-center homeImage position-absolute'>
            <img src={image} alt="imagePhoto" className=''/>
        </div>
    </section>
  )
}
