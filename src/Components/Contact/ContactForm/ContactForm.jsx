import React from 'react'

export default function ContactForm() {
  return (
    <>
      <div className="mb-3">
      <input type="text" className="form-control form-control-lg" id="name" name='name' placeholder="Name"/>
     </div>
      <div className="mb-3">
      <input type="email" className="form-control form-control-lg" id="email" name='email' placeholder="Email Address"/>
     </div>
      <div className="mb-3">
      <input type="text" className="form-control form-control-lg" id="phone" name='phone' placeholder="Phone"/>
     </div>
     <div className="form-floating">
        <textarea className="form-control" placeholder="Your Message"  name='message' id="message" style={{height:'100px'}}></textarea>
    </div>
    <div className='text-end mt-4'>
            <button className='darkBtn rounded-2 position-relative learnMoreBtn'>Submit</button>
    </div>
    </>
  )
}
