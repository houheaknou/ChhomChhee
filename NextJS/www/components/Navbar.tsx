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
          <li><Link href="/" className="active">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><Link href="#">Dropdown 1</Link></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><Link href="#">Deep Dropdown 1</Link></li>
                  <li><Link href="#">Deep Dropdown 2</Link></li>
                  <li><Link href="#">Deep Dropdown 3</Link></li>
                  <li><Link href="#">Deep Dropdown 4</Link></li>
                  <li><Link href="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link href="#">Dropdown 2</Link></li>
              <li><Link href="#">Dropdown 3</Link></li>
              <li><Link href="#">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
  );
};

export default Navbar;
