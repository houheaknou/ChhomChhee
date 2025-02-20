import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import './globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header id="header" className="header d-flex align-items-center sticky-top">
          <a href="/resume" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">ឆោម</h1>
          </a>
          <Navbar />
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
