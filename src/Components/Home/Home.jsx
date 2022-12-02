import React from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeCards from '../HomeCards/HomeCards';

export default function Home() {
  return (
    <div className='container-lg'>
      <HomeHeading/>
      <HomeCards/>
    </div>
  )
}
