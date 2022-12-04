import React from 'react';
import HomeCard from '../../HomeCard/HomeCard';


export default function DesignRouteCards({DesignRoutes}) {
  return (
     <div className="row gy-4 py-2">
              {DesignRoutes.map((route,index)=>   <div className="col-lg-6" key={index}>
                    <HomeCard Large={route.large} Medium={route.medium} Small={route.small} title={route.title} route={route.route} />
                </div>)}
      </div>
  )
}
