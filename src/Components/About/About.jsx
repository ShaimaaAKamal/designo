import React from 'react';
import AboutHeading from './AboutHeading/AboutHeading';
import WorldTalent from './WorldTalent/WorldTalent';
import AboutLocation from './AboutLocation/AboutLocation';

export default function About() {
  return (
      <div className='container-lg'>
        <AboutHeading/>
        <WorldTalent/>
        <AboutLocation/>
      </div>
  )
}
