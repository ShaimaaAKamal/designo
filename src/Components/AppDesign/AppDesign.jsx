import React from 'react';
import importAll from '../../js/images';
import Design from '../Design/Design';


export default function AppDesign() {
     const designTitles=['AIRFILTER','EYECAM','FACEIT','TODO','LOOPSTUDIOS']
     const designMessages=['Solving the problem of poor indoor air quality by filtering the air','Product that lets you edit your favorite photos and videos at any time','Get to meet your favorite internet superstar with the faceit app','A todo app that features cloud sync with light and dark mode','A VR experience app made for Loopstudios'];
     const images = importAll(require.context('../../assets/app-design/desktop', false, /\.(jpg)$/));
     const msg=` Our mobile designs bring intuitive digital solutions
                to your customers right at their fingertips.`
  return (
   <Design title='app design' msg={msg} designTitles={designTitles} designMessages={designMessages} images={images}/>
  )
}
