import { Sidebar } from '@/global/components';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { PageTransition } from '@/global/components';

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
        <meta name="description" content="Hi, My name is Ali Moussa and this is my personal portfolio website, where I showcase my projects and skills." />
      </head>

      <body className={montserrat.className}>
        <div className="layout scroll-smooth">
          <Sidebar />
          <div className="main-content">
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
