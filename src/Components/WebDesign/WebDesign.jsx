import React from 'react';
import DesignHeading from '../DesgnHeading/DesignHeading';
import DesignCards from '../DesignCards/DesignCards';
import importAll from '../../js/images';

export default function WebDesign() {
   const designTitles=['EXPRESS','TRANSFER','PHOTON','BUILDER','BLOGR','CAMP']
   const designMessages=['A multi-carrier shipping website for ecommerce businesses','Site for low-cost money transfers and sending money within seconds','A state-of-the-art music player with high-resolution audio and DSP effects'
                        ,'Connects users with local contractors based on their location','Blogr is a platform for creating an online blog or publication',
                         'Get expert training in coding, data, design, and digital marketing'];
  const images = importAll(require.context('../../assets/web-design/desktop', false, /\.(jpg)$/));
  return (
    <div className='container-lg'>
      <DesignHeading title='web design'>
            We build websites that serve as powerful marketing tools 
            and bring memorable brand experiences.
      </DesignHeading>
      <DesignCards images={images} titles={designTitles} messages={designMessages}/>
    </div>
  )
}
