import React from 'react'
import talentLarge from '../../../assets/about/desktop/image-world-class-talent.jpg'
import talentMedium from '../../../assets/about/tablet/image-world-class-talent.jpg'
import talentSmall from '../../../assets/about/mobile/image-world-class-talent.jpg'
import AboutCard from '../AboutCard/AboutCard'

export default function WorldTalent() {
  const images=[talentLarge,talentMedium,talentSmall];
  const title='World-class talent';
  const messages=[`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
`,`Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
`]
  return (
    <AboutCard images={images} title={title} messages={messages}/>
  )
}
