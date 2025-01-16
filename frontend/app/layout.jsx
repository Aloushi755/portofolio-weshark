"use client";

import {
  Navbar,
  Sidebar,
  HamburgerMenu,
} from '@/global/components';

import './globals.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <title>WESHARK</title>
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
}

