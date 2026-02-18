import { Sidebar } from '@/global/components';
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
        <meta name="description" content="WESHARK is a platform for sharing and discovering content." />
      </head>

      <body className={montserrat.className}>
        <div className="layout scroll-smooth">
          <Sidebar />
          <div className="main-content">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
