'use client'
import Link from 'next/link';
import Brand from './brand.js';
import '../style/navbar.scss';
import Menu from './dropdown.js';
const Navbar = () => {
  return (
<nav id="navbar" className="navbar navbar-charcoal bg-charcoal justify-content-between">
  <Brand id="nav-brand" className=""/>
  <div className="nav-item">
    <Link className="nav-link" href="#">
      Blog 
    </Link>
  </div>
  <div className="nav-item">
    <Link className="nav-link" href="#">
      About
    </Link>
  </div>
  <div className="nav-item">
    <Link className="nav-link" href="#">
      Contact
    </Link>
  </div>
  <div className="dropdown">
    Menu
  </div>
  <form id="search-form" className="form-inline">    
    <input id="search-bar" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button id="search-btn" className="btn btn-outline-success" type="submit">

    </button>

  </form>
</nav>
  )
    }


export default Navbar;