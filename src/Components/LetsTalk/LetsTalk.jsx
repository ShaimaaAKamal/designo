import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function LetsTalk() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/contact');
  }
  return (
    <div className='d-flex align-items-center flex-column flex-lg-row justify-content-lg-between letstalk p-5 rounded-3'>
        <div className='text-white text-center text-lg-start'>
            <h2 className='mb-0'>Let’s talk about</h2>
            <h2>your project</h2>
            <p className='fs-7 w-75 mx-auto ms-lg-0'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <div>
            <button className='darkBtn rounded-2  learnMoreBtn text-uppercase' onClick={handleClick}>get in touch</button>
        </div>
    </div>
  )
}
