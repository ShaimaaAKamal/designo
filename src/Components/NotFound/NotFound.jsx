import React from 'react';
import NotImage from '../../assets/images.png'

export default function NotFound() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <img src={NotImage} alt="not founf image" className='w-100'/>
    </div>
  )
}
