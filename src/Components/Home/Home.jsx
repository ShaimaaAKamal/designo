import React from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeCards from '../HomeCards/HomeCards';
import HomeResource from '../HomeResource/HomeResource';

export default function Home() {
  return (
    <div className='container-lg'>
      <HomeHeading/>
      <HomeCards/>
      <HomeResource/>
    </div>
  )
}
