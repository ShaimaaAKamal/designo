import React from 'react'

export default function Illustarion({image,title,children}) {
  return (
        <div className='d-flex flex-lg-column flex-md-row flex-column align-items-center'>
                <div className='position-relative me-4 me-lg-0'>
                     <div className='circle position-absolute h-100 w-100'>
                     </div>
                     <img src={image} alt={`${title} illusteration`} />
                </div>
                <div className='text-center text-md-start text-lg-center mt-4 mt-md-0 mt-lg-4'>
                    <h5 className='text-uppercase ls textDGary mb-3'>{title}</h5>
                    <p className='fs-sm w-75 mx-auto ms-md-0 mx-lg-auto'>{children}</p>
                </div>
        </div>
  )
}
