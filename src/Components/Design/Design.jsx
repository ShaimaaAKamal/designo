import React from 'react';
import LetsTalk from '../LetsTalk/LetsTalk';
import DesignHeading from './DesgnHeading/DesignHeading';
import DesignCards from './DesignCards/DesignCards';
import DesignRouteCards from './DesignRouteCards/DesignRouteCards';
import appLarge from '../../assets/home/desktop/image-app-design.jpg';
import graphic from '../../assets/home/desktop/image-graphic-design.jpg';
import appMedium from '../../assets/home/tablet/image-app-design.jpg';
import graphicMedium from '../../assets/home/tablet/image-graphic-design.jpg';
import appSmall from '../../assets/home/mobile/image-app-design.jpg';
import graphicSmall from '../../assets/home/mobile/image-graphic-design.jpg';
import webSmall from '../../assets/home/mobile/image-web-design.jpg';
import webLarge from '../../assets/home/desktop/image-web-design-small.jpg';
import webMedium from '../../assets/home/tablet/image-web-design.jpg';


export default function Design({title,msg,images,designTitles,designMessages}) {
    const setRoute=(large,medium,small,title,route)=>{
        return {large,medium,small,title,route}
    }
    let DesignRoutes=[];
    let route1,route2
    if(title === 'web design'){
      route1=setRoute(appLarge,appMedium,appSmall,'app design','app')
      route2=setRoute(graphic,graphicMedium,graphicSmall,'graphic design','graphic')
    }
    else if(title === 'app design'){
      route1=setRoute(webLarge,webMedium,webSmall,'web design','web')
      route2=setRoute(graphic,graphicMedium,graphicSmall,'graphic design','graphic')
    }
    else{
      route1=setRoute(webLarge,webMedium,webSmall,'web design','web')
      route2=setRoute(appLarge,appMedium,appSmall,'app design','app')

    }
    DesignRoutes.push(route1,route2);
  return (
     <div className='container-lg'>
      <DesignHeading title={title}>{msg}</DesignHeading>
      <DesignCards images={images} titles={designTitles} messages={designMessages}/>
      <DesignRouteCards DesignRoutes={DesignRoutes}/>
      <LetsTalk/>
    </div>
  )
}
