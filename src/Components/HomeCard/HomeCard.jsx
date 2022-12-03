import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeCard({Large,Medium,Small,title,route}) {
  return (
     <div className='position-relative rounded-3'>
                <img src={Large} alt="web image" className='w-100 rounded-3 imgLarge' />
                <img src={Medium} alt="web image" className='w-100 rounded-3 imgMedium' />
                <img src={Small} alt="web image" className='w-100 rounded-3 imgSmall' />
                <div className='rounded-3 position-absolute w-100 h-100 top-0 d-flex align-items-center justify-content-center hoverCard'>
                    <div className='text-white text-center'>
                        <h6 className='display-6 text-uppercase hoverCardTitle'>{title}</h6>
                         <Link to={`/${route}`} className='fs-sm text-uppercase text-decoration-none text-reset'>View Projects</Link>
                    </div>
                </div>
    </div>
  )
}
