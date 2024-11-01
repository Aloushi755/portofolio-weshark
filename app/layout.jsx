import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './globals.css';
import HamburgerMenu from '../components/HamburgerMenu';

import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})


const Layout = ({ children }) => (
  <html>
    <body className={montserrat.className}>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <HamburgerMenu />
          <main>{children}</main>
        </div>
      </div>
    </body>
  </html>
);

export default Layout;