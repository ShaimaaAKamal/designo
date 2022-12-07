import React from 'react';
import canada from '../../../assets/shared/desktop/illustration-canada.svg';
import australia from '../../../assets/shared/desktop/illustration-australia.svg';
import unitedKingdom from '../../../assets/shared/desktop/illustration-united-kingdom.svg'

export default function AboutLocation({children}) {
    const locations=['Canada','Australia','unitedKingdom']
    const images=[canada,australia,unitedKingdom]
    const btnText=children ? 'see location' : 'learn more'
  return (
    <div className='row gy-5'>
       { locations.map((location,index)=> <div key={index} className="col-lg-4">
            <div>
                <div className='position-relative text-center me-4 me-lg-0'>
                    <div className='circle h-100 AboutLocationWidth position-absolute'></div>
                    <img src={images[index]} alt={location} className='AboutLocationWidth'/>
                </div>
                <div className='text-center mt-4'>
                     <h5 className='text-uppercase ls fw-normal'>{location}</h5>
                     <button className='lightBtn rounded-2 position-relative text-white mt-2 text-uppercase'>{btnText}</button>
                </div>
            </div>
        </div>)}
    </div>
  )
}
