import React from 'react'

export default function AboutCard({images,title,messages,children}) {
    const zindex=children?'real':''
  return (
         <div className="row gx-0 py-md-5 my-4">
             <div className={`col-lg-5 ${zindex}`}>
              <div>
                  <img src={images[0]} alt="about image" className='w-100 imgLarge talentImg' />
                  <img src={images[1]} alt="about image" className='w-100 imgMedium talentImg' />
                  <img src={images[2]} alt="about image" className='w-100 imgSmall talentImg' />
              </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center bgLight justify-content-center talentInfo">
            <div className='ps-lg-5 ms-lg-5 text-center text-lg-start py-5 py-lg-0'>
                <h1 className='ls mb-3 textSite'>{title}</h1>
                <p className='w-75 ms-lg-0 mx-auto  textDGray fs-sm'>
                    {messages[0]}
                </p>
                 <p className='w-75 ms-lg-0 mx-auto textDGray fs-sm'>
                    {messages[1]}
                </p>
            </div>
          </div>
       </div>
  )
}
