import React from 'react';
import AboutHeading from './AboutHeading/AboutHeading';
import WorldTalent from './WorldTalent/WorldTalent';
import AboutLocation from './AboutLocation/AboutLocation';
import RealDeal from './RealDeal/RealDeal';
import LetsTalk from '../LetsTalk/LetsTalk';

export default function About() {
  return (
      <div className='container-lg'>
        <AboutHeading/>
        <WorldTalent/>
        <AboutLocation/>
        <RealDeal/>
        <LetsTalk/>
      </div>
  )
}
