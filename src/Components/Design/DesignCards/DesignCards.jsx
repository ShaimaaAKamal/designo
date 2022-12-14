import React from 'react';
import DesignCard from '../DesignCard/DesignCard';

export default function DesignCards({images,titles,messages}) {
  return (
    <div className='row py-5 g-5 my-3'>
        {
            titles.map((title,index)=> <DesignCard key={index} image={images[index]} title={title} message={messages[index]}/>)
        }
    </div>
  )
}
