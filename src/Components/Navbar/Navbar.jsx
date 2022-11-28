import React from 'react';
import logo from '../../assets/shared/desktop/logo-dark.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="">
      <img src={logo} alt='logo'/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-capitalize active" aria-current="page" to="About">our company</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-capitalize" to="/locations">locations</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link text-capitalize" to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
