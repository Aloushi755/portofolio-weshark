import { Sidebar, SmoothScrolling } from '@/global/components';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>WESHARK</title>
      </head>

      <body className={montserrat.className}>
        <SmoothScrolling>
          <div className="layout">
            <Sidebar />
            <div className="main-content">
              <main>{children}</main>
            </div>
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
