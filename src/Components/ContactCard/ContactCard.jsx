import React from 'react';
import ContactForm from '../Contact/ContactForm/ContactForm';

export default function ContactCard() {
  return (
    <section className='homeCaption contactCaption rounded-3 mb-5'>
        <div className="row align-items-center   h-100 mx-lg-5 px-4">
          <div className="col-lg-7">
            <div className='text-white text-center text-md-start'>
                <h2 className='mb-3'>Contact Us</h2>
                <p className='fs-sm  contactHeading mx-auto ms-md-0 py-2'>
                  Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div>
                    <ContactForm/>
            </div>
          </div>
        </div>
    </section>
  )
}
