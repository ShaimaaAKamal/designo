import React from 'react';
import webLarge from '../../../assets/home/desktop/image-web-design-large.jpg';
import appLarge from '../../../assets/home/desktop/image-app-design.jpg';
import graphic from '../../../assets/home/desktop/image-graphic-design.jpg';
import webMedium from '../../../assets/home/tablet/image-web-design.jpg';
import appMedium from '../../../assets/home/tablet/image-app-design.jpg'
import graphicMedium from '../../../assets/home/tablet/image-graphic-design.jpg'
import webSmall from '../../../assets/home/mobile/image-web-design.jpg';
import appSmall from '../../../assets/home/mobile/image-app-design.jpg'
import graphicSmall from '../../../assets/home/mobile/image-graphic-design.jpg'

import HomeCard from '../../HomeCard/HomeCard';
export default function HomeCards() {
  return (
    <div className='row py-5 g-4 my-5'>
        <div className="col-lg-6">
            <HomeCard Large={webLarge} Medium={webMedium} Small={webSmall} title='web design' route='web' />
        </div>
        <div className="col-lg-6">
            <div className='row gy-4'>
                <div className="col-12">
                    <HomeCard Large={appLarge} Medium={appMedium} Small={appSmall} title='app design' route='app' />
                </div>
                <div className="col-12">
                    <HomeCard Large={graphic} Medium={graphicMedium} Small={graphicSmall} title='graphic design' route='graphic' />
                </div>
            </div>
        </div>
    </div>
  )
}
