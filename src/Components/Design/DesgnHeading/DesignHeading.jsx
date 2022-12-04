import React from 'react'

export default function DesignHeading({title,children}) {
  return (
    <div className='text-center designHeading p-5 rounded-3 text-white'>
         <h2 className='text-capitalize ls mb-4'>{title}</h2>
         <p className='fw-light small mb-0 designParagWidth px-5 mx-auto'>{children}</p>
    </div>
  )
}
