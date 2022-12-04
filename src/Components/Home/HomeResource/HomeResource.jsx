import React from 'react';
import resource from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../../assets/home/desktop/illustration-friendly.svg';
import passionate from '../../../assets/home/desktop/illustration-passionate.svg';
import Illustarion from '../../Illustration/Illustarion';

export default function HomeResource() {
  return (
    <div className='row gy-4 mb-1'>
      <div className="col-lg-4">
        <Illustarion image={passionate} title='passionate'>
            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
        </Illustarion>
      </div>
       <div className="col-lg-4">
           <Illustarion image={resource} title='RESOURCEFUL'>
            Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
           </Illustarion>
      </div>
       <div className="col-lg-4">
           <Illustarion image={friendly} title='friendly'>
            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
           </Illustarion>
      </div>
    </div>
  )
}
