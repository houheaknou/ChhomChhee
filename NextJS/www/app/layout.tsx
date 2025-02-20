import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header id="header" className="header d-flex align-items-center sticky-top">
          <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/resume" className="logo d-flex align-items-center me-auto me-xl-0">
              <h1 className="sitename">ឆោម</h1>
            </a>
            <Navbar />
            <div className="header-social-links">
              <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </header>
        <main className="main">
          {children}
          
        </main>
        <Footer />
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </body>
    </html>
  );
}
