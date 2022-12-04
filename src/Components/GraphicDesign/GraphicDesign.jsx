import React from 'react';
import importAll from '../../js/images';
import Design from '../Design/Design';

export default function GraphicDesign() {
   const designTitles=['TIM BROWN','BOXED WATER','SCIENCE']
   const designMessages=['A book cover designed for Tim Brown’s new release, ‘Change’','A simple packaging concept made for Boxed Water',
                          'A poster made in collaboration with the Federal Art Project'];
  const images = importAll(require.context('../../assets/graphic-design/desktop', false, /\.(jpg)$/));
  const msg=` We deliver eye-catching branding materials that are 
            tailored to meet your business objectives.`
  return (
      <Design title='graphic design' msg={msg} designTitles={designTitles} designMessages={designMessages} images={images}/>
  )
}
