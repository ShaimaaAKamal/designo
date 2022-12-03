import React from 'react';
import DesignHeading from '../DesgnHeading/DesignHeading';
import DesignCards from '../DesignCards/DesignCards';
import importAll from '../../js/images';
import HomeCard from '../HomeCard/HomeCard';
import LetsTalk from '../LetsTalk/LetsTalk';
import appLarge from '../../assets/home/desktop/image-app-design.jpg';
import graphic from '../../assets/home/desktop/image-graphic-design.jpg';
import appMedium from '../../assets/home/tablet/image-app-design.jpg';
import graphicMedium from '../../assets/home/tablet/image-graphic-design.jpg';
import appSmall from '../../assets/home/mobile/image-app-design.jpg';
import graphicSmall from '../../assets/home/mobile/image-graphic-design.jpg';

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
      <div className="row gy-4 py-2">
                <div className="col-lg-6">
                    <HomeCard Large={appLarge} Medium={appMedium} Small={appSmall} title='app design' route='app' />
                </div>
                <div className="col-lg-6">
                    <HomeCard Large={graphic} Medium={graphicMedium} Small={graphicSmall} title='graphic design' route='graphic' />
                </div>
      </div>
      <LetsTalk/>
    </div>
  )
}
