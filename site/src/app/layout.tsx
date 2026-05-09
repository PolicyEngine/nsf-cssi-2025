import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'NSF CSSI Elements — PolicyEngine Cyberinfrastructure',
  description:
    'PolicyEngine application materials for the NSF CSSI Elements solicitation.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav className="nav-container">
          <div className="nav container">
            <Nav />
          </div>
        </nav>
        <main className="page">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
