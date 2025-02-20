'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    // <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
    //   <Link href="/">Home</Link>
    //   <Link href="/about">About</Link>
    //   <Link href="/resume">Resume</Link>
    //   <Link href="/portfolio">Portfolio</Link>
    //   <Link href="/service">Service</Link>
    //   <Link href="/contact">Contact</Link>
    // </nav>
    <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/service">Services</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
  );
};

export default Navbar;
