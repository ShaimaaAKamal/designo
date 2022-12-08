import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterComp from '../FooterComp/FooterComp';

export default function Layout() {
  const location=useLocation();
  const path=location.pathname
   useEffect(()=>{
    const collapse=document.querySelector('.collapse');
    if(collapse.classList.contains('show'))
    { const menu=document.querySelector('#menu');
      const close=document.querySelector('#close');
      collapse.classList.remove('show');
      close.classList.add('d-none');
      menu.classList.remove('d-none');
     }
  },[path]);
  return (
    <>
        <Navbar/>
        <div className="parent my-4">
            <Outlet/>
        </div>
        <FooterComp/>
    </>
  )
}
