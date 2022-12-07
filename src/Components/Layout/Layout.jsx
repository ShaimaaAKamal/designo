import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterComp from '../FooterComp/FooterComp';

export default function Layout() {
  return (
    <>
        <Navbar/>
        <div className="parent">
            <Outlet/>
        </div>
        <FooterComp/>
    </>
  )
}
