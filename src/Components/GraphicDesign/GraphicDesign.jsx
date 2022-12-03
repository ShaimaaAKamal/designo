import React from 'react';
import webSmall from '../../assets/home/mobile/image-web-design.jpg';
import webLarge from '../../assets/home/desktop/image-web-design-small.jpg';
import webMedium from '../../assets/home/tablet/image-web-design.jpg';
import appLarge from '../../assets/home/desktop/image-app-design.jpg';
import appMedium from '../../assets/home/tablet/image-app-design.jpg';
import appSmall from '../../assets/home/mobile/image-app-design.jpg';
import HomeCard from '../HomeCard/HomeCard';
import DesignHeading from '../DesgnHeading/DesignHeading';
import DesignCards from '../DesignCards/DesignCards';
import importAll from '../../js/images';
import LetsTalk from '../LetsTalk/LetsTalk';

export default function GraphicDesign() {
   const designTitles=['TIM BROWN','BOXED WATER','SCIENCE']
   const designMessages=['A book cover designed for Tim Brown’s new release, ‘Change’','A simple packaging concept made for Boxed Water',
                          'A poster made in collaboration with the Federal Art Project'];
  const images = importAll(require.context('../../assets/graphic-design/desktop', false, /\.(jpg)$/));
  return (
    <div className='container-lg'>
      <DesignHeading title='graphic design'>
            We deliver eye-catching branding materials that are 
            tailored to meet your business objectives.
      </DesignHeading>
      <DesignCards images={images} titles={designTitles} messages={designMessages}/>
        <div className="row gy-4 py-2">
                <div className="col-lg-6">
                     <HomeCard Large={webLarge} Medium={webMedium} Small={webSmall} title='web design' route='web' />
                </div>
                <div className="col-lg-6">
                    <HomeCard Large={appLarge} Medium={appMedium} Small={appSmall} title='app design' route='app' />
                </div>
      </div>
      <LetsTalk/>
    </div>
  )
}
