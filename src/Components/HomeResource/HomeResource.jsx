import React from 'react';
import resource from '../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg';
import passionate from '../../assets/home/desktop/illustration-passionate.svg'

export default function HomeResource() {
  return (
    <div className='row gy-4 mb-5'>
      <div className="col-lg-4">
            <div className='d-flex flex-lg-column flex-md-row flex-column align-items-center'>
                <div className='position-relative me-4 me-lg-0'>
                     <div className='circle position-absolute h-100 w-100'>
                     </div>
                     <img src={passionate} alt="passionate llustraion" />
                </div>
                <div className='text-center text-md-start text-lg-center mt-4 mt-md-0 mt-lg-4'>
                    <h5 className='text-uppercase ls textDGary mb-3'>Passionate</h5>
                    <p className='fs-sm w-75 mx-auto ms-md-0 mx-lg-auto'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>
      </div>
       <div className="col-lg-4">
              <div className='d-flex flex-lg-column flex-md-row flex-column align-items-center'>
                <div className='position-relative me-4 me-lg-0'>
                     <div className='circle position-absolute h-100 w-100'>
                     </div>
                     <img src={resource} alt="passionate llustraion" />
                </div>
                <div className='text-center text-md-start text-lg-center mt-4 mt-md-0 mt-lg-4'>
                    <h5 className='text-uppercase ls textDGary mb-3'>RESOURCEFUL</h5>
                    <p className='fs-sm w-75 mx-auto ms-md-0 mx-lg-auto'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>
      </div>
       <div className="col-lg-4">
                <div className='d-flex flex-lg-column flex-md-row flex-column align-items-center'>
                <div className='position-relative me-4 me-lg-0'>
                     <div className='circle position-absolute h-100 w-100'>
                     </div>
                     <img src={friendly} alt="passionate llustraion" />
                </div>
                <div className='text-center text-md-start text-lg-center mt-4 mt-md-0 mt-lg-4'>
                    <h5 className='text-uppercase ls textDGary mb-3'>FRIENDLY</h5>
                    <p className='fs-sm w-75 mx-auto ms-md-0 mx-lg-auto'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}
