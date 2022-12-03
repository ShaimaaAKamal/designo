import React from 'react'

export default function DesignCard({image,title,message}) {
  return (
         <div className="col-lg-4 ">
            <div className='row rounded-3 gx-0 h-100  '>
                <div className="col-lg-12 col-md-6 col-12 ">
                     <img src={image} alt={`${title} image`} className='w-100 h-100 roundedTop' />
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                   <div className='text-center py-4 bgLightPeach roundedBottom h-100 d-md-flex d-lg-block align-items-center justify-content-center text-md-start text-lg-center'>
                       <div className='text-center'>
                        <h4 className='textSite ls mb-3'>{title}</h4>
                        <p className='fs-sm textDGray w-75 mx-auto'>{message}</p>
                       </div>
                   </div>
                </div>
            </div>
       </div>
  )
}
