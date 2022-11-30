import React, { useEffect } from 'react';
import logo from '../../assets/shared/desktop/logo-dark.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  useEffect(()=>{
     const close=document.querySelector('#close');
     const menu=document.querySelector('#menu');
     const collapse=document.querySelector('collapse');
      menu.addEventListener('click',function(){
        menu.classList.add('d-none');
        close.classList.remove('d-none');
      });
        close.addEventListener('click',function(){
        close.classList.add('d-none');
        menu.classList.remove('d-none');
      });
  },[])
  return (
   <nav className="navbar navbar-expand-lg">
      <div className="container-lg px-0">
        <Link className="navbar-brand ps-4 navLogo" to="">
          <img src={logo} alt='logo' className='w-50'/>
        </Link>
        <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" id='menu'>
            <g fill="#1D1C1E" fillRule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/>
            </g>
          </svg>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className='d-none' id='close'>
            <path d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z" fill="#1D1C1E" fillRule="evenodd"/>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-md-0 p-3">
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-reset active fs-7" aria-current="page" to="About">our company</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-reset fs-7" to="/locations">locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-reset  fs-7" to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
</nav>
  )
}
