import React from 'react'
import talentLarge from '../../../assets/about/desktop/image-world-class-talent.jpg'
import talentMedium from '../../../assets/about/tablet/image-world-class-talent.jpg'
import talentSmall from '../../../assets/about/mobile/image-world-class-talent.jpg'


export default function WorldTalent() {
  return (
     <div className="row gx-0 py-md-5">
             <div className="col-lg-5">
              <div>
                  <img src={talentLarge} alt="about image" className='w-100 imgLarge talentImg' />
                  <img src={talentMedium} alt="about image" className='w-100 imgMedium talentImg' />
                  <img src={talentSmall} alt="about image" className='w-100 imgSmall talentImg' />
              </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center bgLight justify-content-center talentInfo">
            <div className='ps-lg-5 ms-lg-5 text-center text-lg-start py-5 py-lg-0'>
                <h1 className='ls mb-3 textSite'>World-class talent</h1>
                <p className='w-75 ms-lg-0 mx-auto  textDGray fs-sm'>
                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                </p>
                 <p className='w-75 ms-lg-0 mx-auto textDGray fs-sm'>
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                </p>
            </div>
          </div>
       </div>
  )
}
