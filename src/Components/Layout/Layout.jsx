import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterComp from '../FooterComp/FooterComp';

export default function Layout() {
  const location=useLocation();
  const path=location.pathname;
  const handleBg=(stat)=>{
       const bg=document.querySelector('.bgCover');
       if(stat === 'open')
        bg.classList.remove('d-none');
       else  bg.classList.add('d-none');


  }
  const handleNav=()=>{
    const collapse=document.querySelector('.collapse');
    if(collapse.classList.contains('show'))
      { const menu=document.querySelector('#menu');
        const close=document.querySelector('#close');
        const bg=document.querySelector('.bgCover');
        collapse.classList.remove('show');
        close.classList.add('d-none');
        menu.classList.remove('d-none');
        bg.classList.add('d-none');
      }
  }
 
  return (
    <>
        <Navbar handleBg={(stat)=>handleBg(stat)} handleNav={handleNav} />
        <div className='vh-100 position-fixed w-100 bg-black d-none bg-opacity-50 bgCover'></div>
        <div className="parent my-4">
            <Outlet/>
        </div>
        <FooterComp/>
    </>
  )
}
