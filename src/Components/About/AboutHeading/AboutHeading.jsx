import React from 'react';
import aboutLarge from '../../../assets/about/desktop/image-about-hero.jpg';
import aboutMedium from '../../../assets/about/tablet/image-about-hero.jpg';
import aboutSmall from '../../../assets/about/mobile/image-about-hero.jpg';

export default function AboutHeading() {
  return (
       <div className="row gx-0">
          <div className="col-lg-5 headingImage">
              <div>
                  <img src={aboutLarge} alt="about image" className='w-100 imgLarge img' />
                  <img src={aboutMedium} alt="about image" className='w-100 imgMedium img' />
                  <img src={aboutSmall} alt="about image" className='w-100 imgSmall img' />
              </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center AboutHeadingInfo justify-content-center">
            <div className='text-white ps-lg-5 ms-lg-5 text-center text-lg-start py-5 py-lg-0'>
                <h1 className='ls mb-3'>About Us</h1>
                <p className='w-75 ms-lg-0 mx-auto  fs-sm'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
          </div>
       </div>
  )
}
