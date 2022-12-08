import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import AboutLocation from '../About/AboutLocation/AboutLocation';

export default function Contact() {
  return (
    <div className='container-lg pb-5'>
        <ContactCard/>
        <AboutLocation>Locations</AboutLocation>
    </div>
  )
}
