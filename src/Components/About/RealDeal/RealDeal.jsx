import React from 'react'
import Large from '../../../assets/about/desktop/image-real-deal.jpg'
import Medium from '../../../assets/about/tablet/image-real-deal.jpg'
import Small from '../../../assets/about/mobile/image-real-deal.jpg'
import AboutCard from '../AboutCard/AboutCard';


export default function RealDeal() {
   const images=[Large,Medium,Small];
  const title='The real deal';
  const messages=[`As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`
  ,`We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`]
  return (
    <AboutCard images={images} title={title} messages={messages}/>
  )
}

