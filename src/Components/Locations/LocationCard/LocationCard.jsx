import React from 'react'

export default function LocationCard({Large,Medium,title,details,children}) {
    const left=children?'left':'';
  return (
    <div className='row g-md-4 mb-4'>
     <div className={`col-lg-4 ${left}`}>
         <div>
              <img src={Large} alt={title} className="w-100 d-none d-lg-inline-block rounded-3" />
              <img src={Medium} alt={title} className="w-100 d-lg-none rounded-3 locationImg" />
         </div>
      </div>
      <div className="col-lg-8 ">
       <div className='rounded-3 locationInfo bgLight py-5 py-lg-0 h-100 d-flex align-items-center justify-content-center justify-content-md-start'>
           <div className='px-5 '>
            <h3 className='textSite text-capitalize ls mb-4 text-center text-md-start'>{title}</h3>
            <div className='d-flex flex-column textFooter align-items-center flex-md-row justify-content-md-between'>
                <div className=' text-center text-md-start pe-md-5 mb-3 mb-md-0'>
                      <h6 className='mb-2 fw-semibold'>{details[4]}</h6>
                      <p className='mb-1  fs-sm'>{details[0]}</p>
                      <p className='mb-2  fs-sm'>{details[1]}</p>
                </div>
                <div className='text-center text-md-start ps-md-5'>
                      <h6  className='mb-2 fw-semibold'>Contact</h6>
                      <p className='mb-1  fs-sm'>P : {details[2]}</p>
                      <p className='mb-2  fs-sm'>M : {details[3]}</p>
                </div>
            </div>
         </div>
       </div>
      </div>
    
    </div>
  )
}
