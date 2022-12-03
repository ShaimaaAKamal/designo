import React from 'react';
import importAll from '../../js/images';
import DesignHeading from '../DesgnHeading/DesignHeading';
import DesignCards from '../DesignCards/DesignCards';
import LetsTalk from '../LetsTalk/LetsTalk';
import graphic from '../../assets/home/desktop/image-graphic-design.jpg';
import graphicMedium from '../../assets/home/tablet/image-graphic-design.jpg';
import graphicSmall from '../../assets/home/mobile/image-graphic-design.jpg';
import webSmall from '../../assets/home/mobile/image-web-design.jpg';
import webLarge from '../../assets/home/desktop/image-web-design-small.jpg';
import webMedium from '../../assets/home/tablet/image-web-design.jpg';
import HomeCard from '../HomeCard/HomeCard';


export default function AppDesign() {
     const designTitles=['AIRFILTER','EYECAM','FACEIT','TODO','LOOPSTUDIOS']
     const designMessages=['Solving the problem of poor indoor air quality by filtering the air','Product that lets you edit your favorite photos and videos at any time','Get to meet your favorite internet superstar with the faceit app','A todo app that features cloud sync with light and dark mode','A VR experience app made for Loopstudios'];
     const images = importAll(require.context('../../assets/app-design/desktop', false, /\.(jpg)$/));
  return (
    <div className='container-lg'>
      <DesignHeading title='app design'>
            Our mobile designs bring intuitive digital solutions
            to your customers right at their fingertips.
      </DesignHeading>
      <DesignCards images={images} titles={designTitles} messages={designMessages}/>
        <div className="row gy-4 py-2">
                <div className="col-lg-6">
                     <HomeCard Large={webLarge} Medium={webMedium} Small={webSmall} title='web design' route='web' />
                </div>
                <div className="col-lg-6">
                    <HomeCard Large={graphic} Medium={graphicMedium} Small={graphicSmall} title='graphic design' route='graphic' />
                </div>
      </div>
      <LetsTalk/>
    </div>
  )
}
