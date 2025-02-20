'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/service">Service</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
