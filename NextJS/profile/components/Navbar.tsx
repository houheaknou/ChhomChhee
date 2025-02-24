'use client';

import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                    </button>
                    <Link href="#about" className="navbar-brand">
                        <Image src="/images/logo.png" alt="" width={180} height={38} priority/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#hero-area">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#portfolios">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <ul className="onepage-nev mobile-menu">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">about</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#resume">resume</Link></li>
                <li><Link href="#portfolio">Work</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;
