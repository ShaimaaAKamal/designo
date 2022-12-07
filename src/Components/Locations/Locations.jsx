import React from 'react';
import LocationCard from './LocationCard/LocationCard';
import candaLarge from '../../assets/locations/desktop/image-map-canada.png';
import candaMedium from '../../assets/locations/tablet/image-map-canada.png';
import australiaLarge from '../../assets/locations/desktop/image-map-australia.png';
import australiaMedium from '../../assets/locations/tablet/image-map-australia.png';
import unitedLarge from '../../assets/locations/desktop/image-map-united-kingdom.png';
import unitedMedium from '../../assets/locations/tablet/image-map-uk.png';
import LetsTalk from '../LetsTalk/LetsTalk';



export default function Locations() {
  const canadaDetails=[`3886 Wellington Street`,`Toronto, Ontario M9C 3J5`,`+1 253-863-8967`,`contact@designo.co`,`Designo Central Office`];
  const australiaDetails=[`19 Balonne Street` ,`New South Wales 2443`,`(02) 6720 9092`,`contact@designo.au`,`Designo AU Office`];
  const unitedDetails=[`13  Colorado Way`,`Rhyd-y-fro SA8 9GA`,`078 3115 1400`,`contact@designo.uk`,`Designo UK Office`]
  return ( 
    <div className='container-lg'>
      <LocationCard Large={candaLarge} Medium={candaMedium} title='canada' details={canadaDetails}>left</LocationCard>
      <LocationCard Large={australiaLarge} Medium={australiaMedium} title='australia' details={australiaDetails}/>
      <LocationCard Large={unitedLarge} Medium={unitedMedium} title='united kingdom' details={unitedDetails}>left</LocationCard>
      <LetsTalk/>
    </div>
  )
}
